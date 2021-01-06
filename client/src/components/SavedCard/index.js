import React from "react";
import "./style.css";

function SavedCard(props) {
    return (
        <div className="container">
            <div className="row card-rows">
                <div className="left col-md-4">
                    <img className="thumbnail" src={props.thumbnail} alt="Cover"></img>
                </div>
                <div className="right col-md-8">
                    <div className="row justify-content-end">
                    <div className="buttons col-md-3">
                        <button className="btn btn-secondary"><a className="preview" href={props.link} target="_blank">Preview</a></button>
                        <button className="btn btn-light" onClick={(event) => {props.handleDelete(event)}}><img className="delete-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iX3gzMV9feDJDXzVfcHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTJweCI+PGc+PHBhdGggZD0ibTE4LjI1IDIzLjI1aC0xMi41Yy0xLjEwNSAwLTItLjg5NS0yLTJ2LTEzLjVoMTYuNXYxMy41YzAgMS4xMDUtLjg5NSAyLTIgMnoiIGZpbGw9IiM5MGE0YWUiLz48L2c+PGc+PHBhdGggZD0ibTIyLjI1IDcuNzVoLTIwLjV2LTJjMC0xLjEwNS44OTUtMiAyLTJoMTYuNWMxLjEwNSAwIDIgLjg5NSAyIDJ6IiBmaWxsPSIjNjA3ZDhiIi8+PC9nPjxnPjxwYXRoIGQ9Im0xOC4yNSAyNGgtMTIuNWMtMS41MTcgMC0yLjc1LTEuMjMzLTIuNzUtMi43NXYtMTMuNWMwLS40MTQuMzM2LS43NS43NS0uNzVoMTYuNWMuNDE0IDAgLjc1LjMzNi43NS43NXYxMy41YzAgMS41MTctMS4yMzMgMi43NS0yLjc1IDIuNzV6bS0xMy43NS0xNS41djEyLjc1YzAgLjY4OS41NjEgMS4yNSAxLjI1IDEuMjVoMTIuNWMuNjg5IDAgMS4yNS0uNTYxIDEuMjUtMS4yNXYtMTIuNzV6Ii8+PC9nPjxnPjxwYXRoIGQ9Im0yMi4yNSA4LjVoLTIwLjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di0yYzAtMS41MTcgMS4yMzMtMi43NSAyLjc1LTIuNzVoMTYuNWMxLjUxNyAwIDIuNzUgMS4yMzMgMi43NSAyLjc1djJjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1em0tMTkuNzUtMS41aDE5di0xLjI1YzAtLjY4OS0uNTYxLTEuMjUtMS4yNS0xLjI1aC0xNi41Yy0uNjg5IDAtMS4yNS41NjEtMS4yNSAxLjI1eiIvPjwvZz48Zz48cGF0aCBkPSJtMTUuMjUgNC41aC02LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di0yYzAtLjk2NS43ODUtMS43NSAxLjc1LTEuNzVoNC41Yy45NjUgMCAxLjc1Ljc4NSAxLjc1IDEuNzV2MmMwIC40MTQtLjMzNi43NS0uNzUuNzV6bS01Ljc1LTEuNWg1di0xLjI1YzAtLjEzOC0uMTEyLS4yNS0uMjUtLjI1aC00LjVjLS4xMzggMC0uMjUuMTEyLS4yNS4yNXoiLz48L2c+PGc+PHBhdGggZD0ibTcuNzUgMjBjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1di03LjVjMC0uNDE0LjMzNi0uNzUuNzUtLjc1cy43NS4zMzYuNzUuNzV2Ny41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXoiLz48L2c+PGc+PHBhdGggZD0ibTEyIDIwYy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtNy41YzAtLjQxNC4zMzYtLjc1Ljc1LS43NXMuNzUuMzM2Ljc1Ljc1djcuNWMwIC40MTQtLjMzNi43NS0uNzUuNzV6Ii8+PC9nPjxnPjxwYXRoIGQ9Im0xNi4yNSAyMGMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzV2LTcuNWMwLS40MTQuMzM2LS43NS43NS0uNzVzLjc1LjMzNi43NS43NXY3LjVjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1eiIvPjwvZz48L3N2Zz4K" /></button>
                    </div>
                    </div>
                    <h4>{props.title}</h4>
                    <h5>{props.author}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default SavedCard;