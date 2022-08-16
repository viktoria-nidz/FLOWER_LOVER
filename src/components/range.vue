<template>
  <div class="track-container">
    <div class="track" ref="_vpcTrack"></div>
    <div class="track-highlight" ref="trackHighlight"></div>
    <button class="track-btn track1" ref="track1"></button>
    <button class="track-btn track2" ref="track2"></button>
    <div class="price_range">ЦІНА: {{ minValue }} - {{ maxValue }} UAN</div>
  </div>
</template>

<script>
export default {
  name: "PriceRangeSlider",

  props: {
    trackHeight: {
      type: Number,
      deafult: 1,
    },
  },

  data() {
    return {
      min: 50,
      max: 10000,
      minValue: 50,
      maxValue: 10000,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
    };
  },

  methods: {
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(
        this.$refs._vpcTrack.getBoundingClientRect().left
      );
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value =
        Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
      this.$emit("change-range", this.minValue, this.maxValue);
    },
    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    mouseup() {
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    },
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    [
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchmove",
      "touchend",
    ].forEach((type) => {
      document.querySelector(".track1").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document
      .querySelector(".track-highlight")
      .addEventListener("click", function (ev) {
        ev.stopPropagation();
        self.setClickMove(ev);
      });
  },
};
</script>

<style scoped>
.price_range {
  margin-top: 12px;
  padding-top: 6px;
}
.range-value {
  position: absolute;
}
.range-value.min {
  left: 0;
}

.range-value.max {
  right: 0;
}
.track-container {
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 1.5px;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 1.5px;
}

.track {
  background-color: #43ffd2;
}

.track-highlight {
  background-color: white;
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 8px;
  margin-top: -3px;
  height: 8px;

  border: none;
  background-color: #43ffd2;
  border-radius: 50%;
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
</style>
