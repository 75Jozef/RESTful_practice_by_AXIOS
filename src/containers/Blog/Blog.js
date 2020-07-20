import React, { Component } from "react";
// import axios from "axios";
// we do not import from axios package, we want to use an instance that we made in separate file...
// import axios from "../../axios";

import { Route, Link } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />

        {/* "exact" command is that route must be only as it is;if it is ommited, then it is routing also to /new-post/something... */}
      </div>
    );
  }
}

export default Blog;
