import { createSlice } from "@reduxjs/toolkit";
import { getElementError } from "@testing-library/dom";

const templateObject = {
  topics: {
    topics: {
      123: {
        id: "123",
        name: "example topic",
        icon: "icon url",
        quizIds: ["456"]
      }
    }
  },
  quizzes: {
    quizzes: {
      456: {
        id: "456",
        topicId: "123",
        name: "quiz for example topic",
        cardIds: ["789", "101", "102"]
      }
    }
  },
  cards: {
    cards: {
      789: {
        id: "789",
        front: "front text",
        back: "back text"
      },
      101: {
        id: "101",
        front: "front text",
        back: "back text"
      },
      102: {
        id: "102",
        front: "front text",
        back: "back text"
      }
    }
  }
};

const initialState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic(
      id = "number",
      name = "name of topic",
      icon = "Icon url",
      quizIds = []
    ) {
      const topic = { id, name, icon, quizIds };
      return initialState.topics.push(topic);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics;
};

export const { addTopic } = createSlice.actions;
export default topicsSlice.reducer;
