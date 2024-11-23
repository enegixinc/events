<template>
  <div class="event-section">
    <h4>{{ title }} ({{ items.length }})</h4>
    <table>
      <thead>
        <tr>
          <th>File</th>
          <th>Event</th>
          <th>Called</th>
          <th>Success</th>
          <th>Error</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.file }}</td>
          <td>{{ item.topic }}</td>
          <td>{{ item.calledCount }}</td>
          <td>{{ item.successCount }}</td>
          <td>{{ item.errorCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-section {
  flex: 1 1 calc(50% - 1rem);
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}

h4 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background: #eaeaea;
  font-weight: bold;
}

td {
  background: #ffffff;
}
</style>
