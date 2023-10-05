import React from "react";
import { HiOutlineShare } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import comment1 from "../../Assets/comment1.jpg";
import comment2 from "../../Assets/comment2.jpg";
import comment3 from "../../Assets/comment3.jpg";

const CommentSection = () => {
  return (
    <section className="testimonial">
      <div className="contributor">
        <div className="contributor__part1">
          <h1>
            Be A <span>Contributor</span> To Others Success
          </h1>
          <p>
            Create and release Articles,Solutions and Answers <br /> that
            Students and people all over the world needs!
          </p>
        </div>
        <button className="btn_3">Get Started</button>
      </div>
      <div className="testimonial__row">
        <div className="testimonial__col">
          <div className="testimonial__user">
            <img src={comment1} alt="" />
          </div>
          <h3>Spending 5 years chasing the dream,on my final project now!😃</h3>
          <p>#lectures #teamProject</p>
          <p>#socialScience #classof2024</p>
          <div className="testimonial__info">
            <h6>
              <FcLike className="testimonial__icon" />
              10.2k
            </h6>
            <h6>
              <FaRegComment className="testimonial__icon" />
              2.4k
            </h6>
            <HiOutlineShare />
          </div>
        </div>
        <div className="testimonial__col">
          <div className="testimonial__user">
            <img src={comment2} alt="" />
          </div>
          <h3>Back to the ridge west san fransico university.👨‍🎓</h3>
          <p>#SFU</p>
          <p>#chemicalengineering</p>
          <div className="testimonial__info">
            <h6>
              <FcLike className="testimonial__icon" />
              16k
            </h6>
            <h6>
              <FaRegComment className="testimonial__icon" />
              5k
            </h6>
            <HiOutlineShare />
          </div>
        </div>
        <div className="testimonial__col">
          <div className="testimonial__user">
            <img src={comment3} alt="" />
          </div>
          <h3>New day,new week,new haircut more classes 🙄😣✌</h3>
          <p>#SFU</p>
          <p>#chemicalengineering</p>
          <div className="testimonial__info">
            <h6>
              <FcLike className="testimonial__icon" />
              6k
            </h6>
            <h6>
              <FaRegComment className="testimonial__icon" />
              1.5k
            </h6>
            <HiOutlineShare />
          </div>
        </div>
      </div>
      <div className="testimonial__text">
        <h1>
          Join the discussion,take part in it <br /> and establish your presence
        </h1>
        <div className="testimonial__btn">
          <Link to="/login" className="btn-4">
            Join the community
            <GrNext className="btn-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
