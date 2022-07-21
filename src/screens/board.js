import React, { useState } from 'react'
import Table from "./Table.js"
import { Leaderboard } from './OSCWinners';
import osoc_banner from "../assets/osoc_banner.png";
import { tab } from '@testing-library/user-event/dist/tab';

function createBoard(tableTerm) {
    return (
        <Table
            key={tableTerm.id}
            name={tableTerm.name}
            score={tableTerm.score} />

    );
}

export default function Board() {
    return (<div>
        <div className="board">
            <img src={osoc_banner} height="100%" width="100%" />
            <h1 className='leaderboard'>Leaderboard</h1>
            <h4 className='leaderboard'>Top 5 Winners</h4>
            {Leaderboard.map(createBoard)}
            <br/>
            <ul>
                <li>* Five additional points will be awarded to participants and winners</li>
                <li>* The points include bonus points. Bonus points are: first commit, star, fork, weekend event attendance & winners.</li>
            </ul>
        </div>
    </div>
    )
}

function between(data, between) {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })
    // sort with asending order
    return filter.sort((a, b) => {
        if (a.score === b.score) {
            return b.score - a.score;
        } else {
            return b.score - a.score;
        }
    })
}