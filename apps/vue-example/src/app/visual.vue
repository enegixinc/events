<template>
  <div class="events-visualizer">
    <h2>Events Visualizer</h2>

    <div
      v-for="(eventData, eventName) in events"
      :key="eventName"
      class="event-card"
    >
      <h3>{{ eventName }}</h3>

      <div class="event-details">
        <div class="event-section">
          <h4>Publishers ({{ eventData.publishers.length }})</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Event</th>
                <th>Count</th>
                <th>Success</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(publisher, index) in eventData.publishers"
                :key="index"
              >
                <td>{{ publisher.method }}</td>
                <td>{{ publisher.event }}</td>
                <td>{{ publisher.count }}</td>
                <td>{{ publisher.successCount }}</td>
                <td>{{ publisher.errorCount }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="event-section">
          <h4>Subscribers ({{ eventData.subscribers.length }})</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Event</th>
                <th>Count</th>
                <th>Success</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(subscriber, index) in eventData.subscribers"
                :key="index"
              >
                <td>{{ subscriber.method }}</td>
                <td>{{ subscriber.event }}</td>
                <td>{{ subscriber.count }}</td>
                <td>{{ subscriber.successCount }}</td>
                <td>{{ subscriber.errorCount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.events-visualizer {
  font-family: Arial, sans-serif;
}

.event-card {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.event-details {
  display: flex;
  gap: 2rem;
}

.event-section {
  width: 45%;
}

h3,
h4 {
  margin: 0 0 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

td {
  background-color: #f9f9f9;
}
</style>
