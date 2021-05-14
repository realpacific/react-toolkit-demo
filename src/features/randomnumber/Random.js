import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRandom, next, previous, randomAsyncThunk, incRange, decRange } from "./randomSlice"
import './Random.css';

export default function Random() {
    const select = useSelector(selectRandom);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <span className="label">New value:</span>
                <span className="value">{select.value}</span>
            </div>

            <div className="margin-top d-flex-v">
                <button className="button" onClick={() => dispatch(next())}>Generate random</button>
                <span className="margin-vertical"></span>
                {select.oldValue != null && <button className="button" onClick={() => dispatch(previous())}>Previous</button>}
                <span className="margin-vertical"></span>
                <button className="button" onClick={() => dispatch(randomAsyncThunk(select.range))}>Async</button>
            </div>

            <div className="margin-top d-flex-h">
                {select.range > 100 && <button className="button" onClick={() => dispatch(decRange())}>-100</button>}
                <span className="margin-horizontal" />
                <span className="value">{select.range}</span>
                <span className="margin-horizontal" />
                <button className="button" onClick={() => dispatch(incRange())}>+100</button>
            </div>
        </>
    )
}