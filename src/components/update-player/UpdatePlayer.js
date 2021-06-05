import React from 'react';
import { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const playerCategories = [
	"Select Category",
	"Batsman",
	"Bowler",
	"All Rounder",
  ];

export default  class UpdatePlayer extends Component{
	constructor(props){
		super(props);
		this.state={
			id: props.player.id,
			name: props.player.name,
			country: props.player.country,
			category: props.player.category,
			image: props.player.image
		}
		this.savePlayer=this.savePlayer.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	getPlayerCategories = playerCategories.map((cat, index) => (
		<option key={index}>{cat}</option>
	  ));


	  handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

savePlayer(event){
	event.preventDefault();
	let player ={
		id: this.state.id,
		name: this.state.name,
		country: this.state.country,
		category: this.state.category,
		image: this.state.image
	}
	UpdatePlayer(player).then(res =>{
		alert("Player Updated !!!!!");
	})
	
}

	render(){
		return(
			<Form onSubmit={this.savePlayer}>
			<FormGroup>
			  <Label> ID: </Label>
			  <Input type="number" name="id" placeholder={this.props.player.id} value={this.state.id}  onChange={this.handleChange}/>
			</FormGroup>
	
			<FormGroup>
			  <Label> Name: </Label>
			  <Input type="text"  name="name"   placeholder={this.props.player.name}  value={this.state.name}  onChange={this.handleChange}/>
			</FormGroup>
	
			<FormGroup>
			  <Label> Country: </Label>
			  <Input type="text"  name="country"  placeholder={this.props.player.country}  value={this.state.country} onChange={this.handleChange}/>
			</FormGroup>
	
			<FormGroup>
			  <Label> Category: </Label>
			  <Input type="select" name="category"  value={this.state.category}  onChange={this.handleChange}>
				  {this.getPlayerCategories}
			  </Input>
			</FormGroup>
	
			<FormGroup>
			  <Label> Player URL: </Label>
			  <Input type="text" name="image"  placeholder={this.props.player.image} value={this.state.image}  onChange={this.handleChange}/>
			</FormGroup>
	
			<Button type="submit" color="danger">Update Player</Button>
		  </Form>
		);
	  }
	}