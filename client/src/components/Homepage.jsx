import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardOne from './../imgs/kidaha-01.svg';
import CardTwo from './../imgs/kidaha-10.svg';
import CardThree from './../imgs/kidaha-12.svg';


const Homepage = () => {
return (
    <section className="section-one">
        <Grid className="cards-container" container spacing={24}>
            <Grid item sm={12} md={4}>
                <Paper>
                    <div className="card-img">
                        <img src={CardOne} alt="find goal" />
                    </div>
                    <h2>Achieve your goals</h2>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                    </div>
                </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
                <Paper>
                <div className="card-img">
                        <img src={CardThree} alt="find goal" />
                    </div>
                    <h2>Challenge your friends</h2>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                    </div>
                </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
                <Paper>
                <div className="card-img">
                        <img src={CardTwo} alt="find goal" />
                    </div>
                    <h2>Achieve your goals</h2>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </section>
)
};


export default Homepage;