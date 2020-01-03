import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getBrandMenuByID } from '../services/fetchData';

export class BrandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandMenu: [],
    };
  }

  componentDidMount() {
    this.getBrandInfos();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { brandID: prevPropsBrandID },
      },
    } = prevProps;
    const {
      match: {
        params: { brandID },
      },
    } = this.props;
    if (prevPropsBrandID !== brandID) {
      this.getBrandInfos();
    }
  }

  getBrandInfos = async () => {
    const {
      match: {
        params: { brandID },
      },
    } = this.props;
    const { data: brandMenu } = await getBrandMenuByID(brandID);
    this.setState({ brandMenu });
  };

  render() {
    const { brandMenu } = this.state;

    return (
      <div>
        <h1>Brand Page</h1>
        <div>
          {brandMenu.map(
            ({ id, fields: { item_id, item_name, brand_name } }) => (
              <div key={item_id}>
                <Link to={`/item/${item_id}`}>
                  <div>
                    <img
                      alt="item pic"
                      src={`https://res.cloudinary.com/nutritionix/image/upload/${item_id}.png`}
                    />
                  </div>
                  <div>{item_name}</div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
