import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4, v4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";
import { useDispatch } from "react-redux";

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    // dispatch your add topic action here

    dispatch(addTopic({ id: v4(), name: name, icon: icon }));
    history.push(ROUTES.topicsRoute());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
            required
          />
          <select onChange={(e) => setIcon(e.currentTarget.value)} required>
            <option value="">Choose a topic name</option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
          <div class="topic center">
            <div class="topic-container">
              <img
                className="topic-icon"
                src={icon}
                alt=""
                style={{ margin: 0 }}
              />
              <div class="text-content">
                <h2>{name}</h2>
                <p>0 Quizzes</p>
              </div>
            </div>
          </div>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
