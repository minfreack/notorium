import React from "react";
import pomodoros from '../../images/pomodoro.png';
import notes from '../../images/notes.png';
import reminders from '../../images/reminders.png';
import routine from '../../images/routine.png';
import schedule from '../../images/schedule.png';
import './characteristicsItems.css'

export const CharacteristicsItems = () => {
  return (
    <section className="characteristics-item">
      <div className="item">
        <div className="characteristics-item-image">
          <img src={pomodoros} alt="" />
        </div>
        <div className="characteristics-item-text">
          <h2>| Notorium</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            dolorum, veniam esse doloribus, deserunt suscipit cupiditate eaque
            maiores perspiciatis excepturi iusto porro quaerat odio at modi eos
            animi quasi sint!
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <div className="characteristics-item-text">
          <h2>| Notorium</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            dolorum, veniam esse doloribus, deserunt suscipit cupiditate eaque
            maiores perspiciatis excepturi iusto porro quaerat odio at modi eos
            animi quasi sint!
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="characteristics-item-image">
          <img src={notes} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="characteristics-item-image">
          <img src={reminders} alt="" />
        </div>
        <div className="characteristics-item-text">
          <h2>| Notorium</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            dolorum, veniam esse doloribus, deserunt suscipit cupiditate eaque
            maiores perspiciatis excepturi iusto porro quaerat odio at modi eos
            animi quasi sint!
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <div className="characteristics-item-text">
          <h2>| Notorium</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            dolorum, veniam esse doloribus, deserunt suscipit cupiditate eaque
            maiores perspiciatis excepturi iusto porro quaerat odio at modi eos
            animi quasi sint!
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="characteristics-item-image">
          <img src={routine} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="characteristics-item-image">
          <img src={schedule} alt="" />
        </div>
        <div className="characteristics-item-text">
          <h2>| Notorium</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
            dolorum, veniam esse doloribus, deserunt suscipit cupiditate eaque
            maiores perspiciatis excepturi iusto porro quaerat odio at modi eos
            animi quasi sint!
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};
