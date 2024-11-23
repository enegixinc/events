<template>
  <div class="events-container">
    <h1 class="page-title">Events Visualization</h1>

    <div v-for="(topic, index) in topics" :key="index" class="topic">
      <h2 class="topic-title" @click="toggleSection(index)">
        {{ topic.topic }}
        <span class="toggle-icon">{{
          expandedTopic === index ? '▼' : '►'
        }}</span>
      </h2>

      <div v-show="expandedTopic === index" class="events">
        <div
          v-for="(event, eventIndex) in topic.events"
          :key="eventIndex"
          class="event"
        >
          <h3 class="event-key">{{ event.eventKey }}</h3>

          <div class="event-section">
            <h4>Publishers</h4>
            <div v-if="event.publishers.length" class="publishers">
              <div
                v-for="(publisher, pubIndex) in event.publishers"
                :key="pubIndex"
                class="publisher"
              >
                <div class="publisher-header">
                  <p>
                    <strong>File:</strong> {{ publisher.originalPosition.file }}
                  </p>
                  <p>
                    <strong>Line:</strong>
                    {{ publisher.originalPosition.line }}, Column:
                    {{ publisher.originalPosition.column }}
                  </p>
                </div>
                <div class="publisher-stats">
                  <p :class="getStatusClass(publisher)">
                    <strong>Called:</strong> {{ publisher.calledCount }}
                  </p>
                  <p :class="getStatusClass(publisher)">
                    <strong>Success:</strong> {{ publisher.successCount }}
                  </p>
                  <p :class="getStatusClass(publisher)">
                    <strong>Error:</strong> {{ publisher.errorCount }}
                  </p>
                </div>
                <div>
                  <VCodeBlock :code="publisher.originalPosition.codeBlock" />
                </div>
              </div>
            </div>
            <p v-else>No publishers</p>
          </div>

          <div class="event-section">
            <h4>Subscribers</h4>
            <div v-if="event.subscribers.length" class="subscribers">
              <div
                v-for="(subscriber, subIndex) in event.subscribers"
                :key="subIndex"
                class="subscriber"
              >
                <div class="subscriber-header">
                  <p>
                    <strong>File:</strong>
                    {{ subscriber.originalPosition.file }}
                  </p>
                  <p>
                    <strong>Line:</strong>
                    {{ subscriber.originalPosition.line }}, Column:
                    {{ subscriber.originalPosition.column }}
                  </p>
                </div>
                <div class="subscriber-stats">
                  <p :class="getStatusClass(subscriber)">
                    <strong>Called:</strong> {{ subscriber.calledCount }}
                  </p>
                  <p :class="getStatusClass(subscriber)">
                    <strong>Success:</strong> {{ subscriber.successCount }}
                  </p>
                  <p :class="getStatusClass(subscriber)">
                    <strong>Error:</strong> {{ subscriber.errorCount }}
                  </p>
                </div>
                <div>
                  <VCodeBlock :code="subscriber.originalPosition.codeBlock" />
                </div>
              </div>
            </div>
            <p v-else>No subscribers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PubSubVisualizer',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expandedTopic: 0, // Tracks the expanded topic index
    };
  },
  computed: {
    topics() {
      return this.data.events ? [this.data] : []; // Wrap the data in an array if it's not already
    },
  },
  mounted() {
    this.expandedTopic = 0; // Expand the first topic by default
  },
  methods: {
    toggleSection(index) {
      this.expandedTopic = this.expandedTopic === index ? null : index;
    },
    getStatusClass(item) {
      if (item.errorCount > 0) {
        return 'status-error';
      }
      if (item.successCount > 0) {
        return 'status-success';
      }
      return '';
    },
  },
};
</script>

<style scoped>
.events-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.topic {
  border: 1px solid #ddd;
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.topic-title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #333;
}

.events {
  margin-top: 10px;
}

.event {
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-top: 10px;
}

.event-key {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
}

.event-section {
  margin-top: 20px;
}

.publishers,
.subscribers {
  margin-left: 20px;
  padding: 10px 0;
}

.publisher,
.subscriber {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.publisher-header,
.subscriber-header {
  font-size: 0.9rem;
  color: #555;
}

.publisher-stats,
.subscriber-stats {
  font-size: 0.9rem;
  margin-top: 5px;
}

.status-success {
  color: green;
}

.status-error {
  color: red;
}

h4 {
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #555;
}

.page-title {
  color: #2c3e50;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.topic-title {
  color: #1abc9c;
  font-size: 20px;
  cursor: pointer;
}

.topic-title:hover {
  color: #16a085;
}

.publisher-header p,
.subscriber-header p {
  font-size: 0.9rem;
  color: #666;
}

.publisher-stats p,
.subscriber-stats p {
  font-size: 0.85rem;
}

.code-block {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}
</style>
