import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    disabled={false}
                    type="button"
                    log="to the collection"
                    buttontext="to the collection">
                </Button>

                <Button
                    disabled={false}
                    type="button"
                    log="shop all bags"
                    buttontext="shop all bags">
                </Button>

                <Button
                    disabled={true}
                    type="button"
                    log="pre-orders"
                    buttontext="pre-orders">
                </Button>

                <main>
                    <Product
                        tag="Best seller"
                        image={bag_1}
                        alt="The handy bag"
                        name="The handy bag"
                        price="400"
                    />

                    <Product
                    tag="Best seller"
                    image={bag_2}
                    alt="The stylish bag"
                    name="The stylish bag"
                    price="250"
                    />

                    <Product
                        tag="New collection"
                        image={bag_3}
                        alt="The simple bag"
                        name="The simple bag"
                        price="300"
                    />

                    <Product
                        tag="New collection"
                        image={bag_4}
                        alt="The trendy bag"
                        name="The trendy bag"
                        price="150"
                    />
                </main>

                <footer>

                       <Tile
                           title="The brand">
                           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, laboriosam
                               omnis. Amet culpa cupiditate dignissimos dolorem eum exercitationem, expedita
                               molestiae nemo quae quam quas quia recusandae repellendus suscipit
                               temporibus vero?</p>
                           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores
                               aspernatur autem, cupiditate ducimus earum, error exercitationem incidunt laboriosam
                               laborum nam nostrum porro possimus rem repellendus reprehenderit sint temporibus
                               veritatis!</p>
                       </Tile>

                      <Tile
                      image={brand}
                      alt="Box"
                      />

                      <Tile
                      image={our_story}
                      alt="Our Story"
                      />

                      <Tile
                          title="Our Story">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque esse fuga in laudantium
                            necessitatibus non porro, quaerat, rerum sint sunt tempore temporibus voluptatum! Delectus distinctio
                            quaerat quas quod soluta.</p>
                      </Tile>
                </footer>

            </nav>
        </>
    );
}

export default App;



