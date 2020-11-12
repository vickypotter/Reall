import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";
import './ArticleListView.css';
import { Drawer, Button } from 'antd';


class ArticleList extends React.Component {
  state = {
    articles: [],
    visible: false, 
    
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();      
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <div >
        <Articles data={this.state.articles} /> <br />
        <center>
        <Button type="primary" id="postBtn" onClick={this.showDrawer} size={"large"}>
            Add Post
        </Button>
        </center>
        {/* <div className='create-box'>
          <h2> Create an New Post </h2>
          <CustomForm requestType="post" articleID={null} btnText="Create" />
        </div> */}
        <Drawer
          title="Recall - New Post"
          placement={"top"}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={"top"}
          width={'100%'}
          
        >
          <div className='create-box'>
            <center>
              <h2> Create an New Post </h2>
              <CustomForm requestType="post" articleID={null} btnText="Create" />
            </center>
          </div>
          
        </Drawer>
      </div>
    );
  }
}

export default ArticleList;
