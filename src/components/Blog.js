import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {
    

    render() {
        return(
            <div id="home">
                <Slider title="Blog" size="slider-small"/>
               <div className="center">
                    {/* Listado de articulos que vendran de la api */}
                    <div id="content" className="articles">
                        <h1 className="subheader">Blog</h1>
                        <Articles component='blog'/>
                    </div>  
                </div>
                <Sidebar blog="true"/>
            </div>
        );
    }
}

export default Blog;