export const dateFromTimestamp = (timestamp, separator = '.') => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
};

export const dateToInput = (newDate = new Date(), separator = '-') => {
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
};

export const dateFromTimestampToInput = (timestamp, separator = '-') => {
    if (!Number.isInteger(timestamp)) return timestamp;
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${day}`;
};
