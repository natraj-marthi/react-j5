import React from "react";
import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createPlayer } from "../../services";

const playerCategories = [
  "Select Category",
  "Batsman",
  "Bowler",
  "All Rounder",
];
export default class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      country: "",
      category: "",
      image: "",
    };
    this.handleChange = this.handleChange.bind(this);
	this.savePlayer= this.savePlayer.bind(this);
  }

  handleChange(event){
	  this.setState({
		  [event.target.name]: event.target.value
	  })
  }

  savePlayer(event){
	  event.preventDefault();
	  let player = {
		  id: this.state.id,
		  name:this.state.name,
		  country:this.state.country,
		  category: this.state.category,
		  image: this.state.image
	  }
	  createPlayer(player).then(res => alert("Player created !!!"));
  }

  getPlayerCategories = playerCategories.map((cat, index) => (
    <option key={index}>{cat}</option>
  ));

  render() {
    return (
      <Form onSubmit={this.savePlayer}>
        <FormGroup>
          <Label> ID: </Label>
          <Input type="number" name="id" placeholder="Enter player ID"  value={this.state.id}  onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label> Name: </Label>
          <Input type="text"  name="name"   placeholder="Enter player Name"  value={this.state.name}  onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label> Country: </Label>
          <Input type="text"  name="country"  placeholder="Enter player Country"  value={this.state.country} onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label> Category: </Label>
          <Input type="select" name="category"  value={this.state.category}  onChange={this.handleChange}>
			  {this.getPlayerCategories}
		  </Input>
        </FormGroup>

		<FormGroup>
          <Label> Player URL: </Label>
          <Input type="text" name="image"  value={this.state.image}  onChange={this.handleChange}/>
        </FormGroup>

		<Button type="submit" color="danger">Save Player</Button>
      </Form>
    );
  }
}
