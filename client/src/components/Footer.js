import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <footer className="clearfix">
      <div className="container">
        <p>© 2018 More Just Store</p>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + "/"} className="animated_link">Home</Link></li>
          <li><Link to={process.env.PUBLIC_URL + "/docs"} className="animated_link">Docs</Link></li>
          <li><a href="https://github.com/morejust/store" target="blank" className="animated_link">GitHub</a></li>
          <li><a href="https://www.producthunt.com/posts/morejust-store" target="blank" className="animated_link">Product Hunt</a></li>
        </ul>
      </div>
    </footer>
  );
}
