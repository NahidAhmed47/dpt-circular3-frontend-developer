const options1 = {
    name: "departureRoute",
    data: [
        { value: "LHR", label: "LHR" },
        { value: "CDG", label: "CDG" },
        { value: "DAC", label: "DAC" },
    ],
};
const options2 = {
    name: "arrivalRoute",
    data: [
        { value: "CDG", label: "CDG" },
        { value: "IST", label: "IST" },
        { value: "FCO", label: "FCO" },
    ],
};
const options3 = [{ value: "day-", label: "Day -" }];
const options4 = [{ value: "day+", label: "Day +" }];
const options5 = {
    name: "time",
    data: [
        { value: "At", label: "Any time" },
        { value: "Win", label: "Winter" },
        { value: "Sum", label: "Summer" },
    ],
};
const options6 = {
    name: "additional",
    data: [
        { value: "ADT", label: "ADT" },
        { value: "CLD", label: "CLD" },
        { value: "KID", label: "KID" },
    ],
};
const options7 = {
    name: "options7",
    data: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ],
};

export { options1, options2, options3, options4, options5, options6, options7 };
