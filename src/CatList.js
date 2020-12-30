import React, { Component } from 'react';


class CatList extends Component {
   catPictures = () => {
       return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} />)

   }

    render() {
        return (
            <div>
                {this.catPictures()}
            </div>
        );
    }
}

export default CatList;