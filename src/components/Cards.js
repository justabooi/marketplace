import React from 'react'

export default function Cards() {
    return (
        <div>
              <div class="card row ">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://materializecss.com/images/office.jpg" alt="img"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">NFT Title<i class="material-icons right">more_vert</i></span>
      <p><button>Buy</button></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div>
    )
}