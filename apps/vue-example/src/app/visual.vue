<template>
  <div>
    <h1>Event Visualizer</h1>
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Type</th>
          <th>Method</th>
          <th>Component</th>
          <th>File</th>
          <th>Line</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="event in events"
          :key="event.file + event.line + event.event"
        >
          <td>{{ event.event }}</td>
          <td>{{ event.type }}</td>
          <td>{{ event.method }}</td>
          <td>{{ event.component }}</td>
          <td>{{ event.file }}</td>
          <td>{{ event.line }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {},
};
</script>
