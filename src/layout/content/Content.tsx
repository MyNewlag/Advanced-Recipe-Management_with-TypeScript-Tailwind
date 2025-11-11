
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import AddRecipe from '../../pages/AddRecipe';
import RecipeDetail from '../../pages/RecipeDetail';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>   
                <Route path='/add' element={<AddRecipe/>}/>   
                <Route path='/recipe/:id' element={<RecipeDetail/>}/>   
            </Routes> 
        </div>
    );
}

export default Content;
