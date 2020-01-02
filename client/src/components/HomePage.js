import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getBrandsByTheme } from '../services/fetchData';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BrandsList: [],
    };
  }
  componentDidMount() {
    this.getBrandsList();
  }

  getBrandsList = async () => {
    const { data: BrandsList } = await getBrandsByTheme();
    this.setState({ BrandsList });
  };
  render() {
    const { BrandsList } = this.state;
    return (
      <div>
        <h1>Nutritionix APP with NodeJs</h1>
        {BrandsList.map(({ fields: { name, _id: id } }) => (
          <div key={id}>
            <Link to={`/brand/${id}`}>
              <div>
                <img
                  src={`https://res.cloudinary.com/nutritionix/image/upload/${id}.png`}
                  alt="brand logo"
                />
              </div>
              <div>{name}</div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
