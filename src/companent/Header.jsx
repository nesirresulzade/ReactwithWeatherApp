import React, { useState, useEffect } from 'react';
// import "../style/index.css";

function Header({ setCity }) {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {

        function updateTime() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;

            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const day = days[now.getDay()];
            const month = months[now.getMonth()];
            const date = now.getDate();

            setTime(`${hours}:${minutes}`);
            setDate(`${day} | ${month} ${date}`);
        }

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function handleClick() {
        setCity(inputValue);
    }

    return (
        <>
            <div className="time">{time}</div>
            <div className="date">{date}</div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Şəhəri daxil et"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>Axtar</button>
            </div>
        </>
    );
}

export default Header;
