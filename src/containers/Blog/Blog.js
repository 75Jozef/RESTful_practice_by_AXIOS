import React, { Component } from "react";
// import axios from "axios";
// we do not import from axios package, we want to use an instance that we made in separate file...
// import axios from "../../axios";

import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "submit",
                    search: "?quick-submit=true",
                  }}
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts/:id" exact component={FullPost} />
        </Switch>
        {/* to, čo bude medzi Switch componentom, to bude analyzovať Route a pustí vždy len prvý link, ktorý splní podmienku a ostatné nezobrazé, preto je dôležité, aby boli zoradené podľa priority; ak potrebujeme, tiež môžeme pred Switch dať Route, ktoré budú vždy analyzované a tak sa hrať, alebo to dať za... */}
        {/* "exact" command is that route must be only as it is;if it is ommited, then it is routing also to /new-post/something... */}
      </div>
    );
  }
}

export default Blog;
