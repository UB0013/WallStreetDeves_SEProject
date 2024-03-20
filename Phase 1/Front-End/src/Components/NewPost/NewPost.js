import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.css';
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onFormSubmit = async (postObj) => {
    try {

      const formData = new FormData();
      console.log(postObj);
      formData.append("postObj", JSON.stringify(postObj));

      console.log(formData);
      const response = await axios.post("http://localhost:4000/post-api/new-post", formData, {
        headers: {
          "Content-Type": 'application/json',
        },
      });

      console.log("New Post Added:", response.data);
      alert(response.data.message);
      if(response.data.message=="New Post Added"){
        navigate('/posts')
      }
    } catch (error) {
      console.error("Error adding new post:", error);
      alert(error)
    }
  };

  return (
    <div className="new-post-card" style={{ marginTop: '40px' }}>
      <h2>Create New Post</h2>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title.."
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">* Title is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Content: </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Content.."
            {...register("content", { required: true })}
          />
          {errors.content && (
            <p className="text-danger">* Content is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
          </Form.Select>
          {errors.category && (
            <p className="text-danger">* Category is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="visibility">
          <Form.Label>Visibility:</Form.Label>
          <Form.Select
            {...register("visibility", { required: true })}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Form.Select>
          {errors.visibility && (
            <p className="text-danger">* Visibility is required</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>

    </div>
  );
}

export default NewPost;
