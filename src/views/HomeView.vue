<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
    };
  },

  methods: {
    afterLoad() {
      console.log("Emitted 'after load' event.");
    },
  },
};
</script>