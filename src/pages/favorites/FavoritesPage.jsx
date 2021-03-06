import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import LocalDataContext from '../../context/local-data/LocalDataContext';

import { ReactComponent as HeartLogo } from '../../assets/heart.svg';
import CustomButton from '../../components/custom-btn/CustomButton';
import RecipeCard from '../../components/recipe-card/RecipeCard';

import './FavoritesPage.scss';

const FavoritesPage = ({ history }) => {
    
    const { favs } = useContext(LocalDataContext);

    return (
        <div className="favorites-page">
            <h1>Your Favorites</h1>
            {
                favs.length ? 
                (
                    <div className="favorites-list">
                        {
                            favs.map(fav => 
                            <RecipeCard key={fav.id} recipe={fav}/>)
                        }
                    </div>
                ) : (
                    <div className="empty-fav-list">
                        <div className="empty-message">
                            <span>You don't have any favorite recipes yet!</span>
                            <CustomButton onClick={() => history.push('/')}>
                                Back To Your Pantry
                            </CustomButton>
                        </div>

                        <HeartLogo className='heart-logo' />
                        
                    </div>
                )
            }        
        </div>
    );
}

export default withRouter(FavoritesPage);