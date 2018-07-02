import React, { Component } from 'react';
import Parallax from 'parallax-js';

class Home extends Component {
  componentDidMount() {
    this.parallax1 = new Parallax(this.scene1);
    this.parallax2 = new Parallax(this.scene2);
    this.parallax3 = new Parallax(this.scene3);
    this.parallax4 = new Parallax(this.scene4);
    this.parallax5 = new Parallax(this.scene5);
    this.parallax6 = new Parallax(this.scene6);
    this.parallax7 = new Parallax(this.scene7);

    // 限制觸發區域，不要整個頁面都有效果
    // this.parallax1 = new Parallax(this.scene1, {
    //   hoverOnly: true,
    //   relativeInput: true,
    //   inputElement: this.scene1
    // });
  }
  componentWillUnmount() {
    this.parallax1.disable();
    this.parallax2.disable();
    this.parallax3.disable();
    this.parallax4.disable();
    this.parallax5.disable();
    this.parallax6.disable();
    this.parallax7.disable();
  }
  render() {
    return (
      <div className="wrap">
        <header>
          <h1>
            <small>CCCLOTHES</small>
            MEN’S TOPS
          </h1>
        </header>
        <main>
          <div className="item item1">
            <ul
              className="item-content"
              ref={el => this.scene1 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="LINEN BLAZER">LINEN BLAZER</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s outfit</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">01</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=9b19616e232bd3897c5033df23102c6e&auto=format&fit=crop&w=634&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item2">
            <ul
              className="item-content"
              ref={el => this.scene2 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="FREELIFT">FREELIFT</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s basics</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">02</p>
              </li>
              <li className="layer l-pic" data-depth="0.90">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=634&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item3">
            <ul
              className="item-content"
              ref={el => this.scene3 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="SUPER SKINNY">SUPER SKINNY</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s outfit</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">03</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item4">
            <ul
              className="item-content"
              ref={el => this.scene4 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="DENIM">DENIM</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s cadual</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">04</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item5">
            <ul
              className="item-content"
              ref={el => this.scene5 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="SWEATSHIRTS">SWEATSHIRTS</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s jacket</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">05</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item6">
            <ul
              className="item-content"
              ref={el => this.scene6 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="VINTAGE DENIM">VINTAGE DENIM</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s classic</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">06</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=1868&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

          <div className="item item7">
            <ul
              className="item-content"
              ref={el => this.scene7 = el}
            >
              <li className="layer" data-depth="0.00" />
              <li className="layer l-title" data-depth="0.10">
                <h2 data-title="EDITION">EDITION</h2>
              </li>
              <li className="layer l-txt" data-depth="0.20">
                <p className="txt">Men’s shirts</p>
              </li>
              <li className="layer l-number" data-depth="0.30">
                <p className="number">07</p>
              </li>
              <li className="layer l-pic" data-depth="0.40">
                <div className="pic">
                  <img src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=634&q=80" alt="" />
                </div>
              </li>
              <li className="layer l-striped" data-depth="0.50">
                <div className="striped" />
              </li>
              <li className="layer l-bordered" data-depth="0.60">
                <div className="bordered" />
              </li>
              <li className="layer l-color-box" data-depth="0.70">
                <div className="color-box" />
              </li>
            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default Home;
