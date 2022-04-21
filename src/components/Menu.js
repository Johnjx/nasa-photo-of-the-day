import React, { useEffect, useState } from "react";
import styled from "styled-components";


const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

const StyledMenu = styled.div`
    background-color: ${pr => pr.theme.terColor};

    form {
        padding-top: 1%;
    }

    label {
        color: white;
    }

    span {
        margin-top: 2%;
        margin-bottom: 2%;
        padding: 1%;
    }

    select {
        &:hover {
            background-color: ${pr => pr.theme.secColor};
            transition: all 0.2s ease-in-out;
        }
    }

    button {
        margin: 2% auto;
        padding: 1%;
        &:hover {
            background-color: ${pr => pr.theme.secColor};
            transition: all 0.2s ease-in-out;
        }
    }
`



export default function Menu(props) {
    const { open } = props;
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year")
    
    const pushDate = () => {
        const dateArr = [];
        const numMonth = (months.indexOf(month.value) + 1)
        const zeroMonth = ('0'+numMonth);
        dateArr.push(year.value, zeroMonth, day.value)
        return dateArr;
    }

    useEffect(() => {
        const populateMonths = () => {
            months.forEach((month, idx) => {
                const options = document.createElement('option');
                options.textContent = month;
                document.getElementById("month").appendChild(options)
            })
        }
        
        populateMonths();
    }, [])

    useEffect(() => {
        const populateDays = (month) => {
            const daySelect = document.getElementById("day");
            while(daySelect.firstChild){
                daySelect.removeChild(daySelect.firstChild)
            }
            let dayNum;
    
            if(month === 'January' || month === 'March' || 
        month === 'May' || month === 'July' || month === 'August' 
        || month === 'October' || month === 'December') {
            dayNum = 31;
        } else if(month === 'April' || month === 'June' 
        || month === 'September' || month === 'November') {
            dayNum = 30;
        }else{
            
        }
    
        for (let i = 1; i <= dayNum; i++){
            const option = document.createElement('option');
            option.textContent = i;
            daySelect.appendChild(option);
    
        }
    
    }
        const monthSelect = document.getElementById("month");
    populateDays(monthSelect.value);
    }, [])

   

    useEffect(() => {
        const populateYears = () => {
            let year = new Date().getFullYear();
            for (let i = 0; i < 51; i++) {
                const option = document.createElement('option');
                option.textContent = year - i;
                document.getElementById("year").appendChild(option);
            }
        }
        populateYears();
    }, [])

    return (
        <StyledMenu>
            <form>
                <span>
                    <label htmlFor="day">Day:</label>
                    <select name="day" id="day"></select>
                </span>
                <span>
                    <label htmlFor="month">Month:</label>
                    <select name="month" id="month"></select>
                </span>
                <span>
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year" ></select>
                </span>
            </form>
            <button onClick={() => open(pushDate())} >
                Get new Feature!
            </button>
        </StyledMenu>
    )
}


