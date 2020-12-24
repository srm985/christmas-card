/* eslint prefer-destructuring: 0 */

export const BASE_URL = process.env.BASE_URL;

export const LOCAL_STORAGE_TOKEN = process.env.LOCAL_STORAGE_TOKEN;

export const DAY_ORDER = [
    {
        long: 'Sunday',
        short: 'Sun'
    },
    {
        long: 'Monday',
        short: 'Mon'
    },
    {
        long: 'Tuesday',
        short: 'Tue'
    },
    {
        long: 'Wednesday',
        short: 'Wed'
    },
    {
        long: 'Thursday',
        short: 'Thu'
    },
    {
        long: 'Friday',
        short: 'Fri'
    },
    {
        long: 'Saturday',
        short: 'Sat'
    }
];

export const FOOD_LABELS = {
    1: {
        longName: 'Gluten-Free',
        shortName: 'GF'
    },
    2: {
        longName: 'Vegan',
        shortName: 'VG'
    },
    3: {
        longName: 'Vegetarian',
        shortName: 'VE'
    },
    4: {
        longName: 'Dairy-Free',
        shortName: 'DF'
    },
    5: {
        longName: 'Nut-Free',
        shortName: 'NF'
    },
    6: {
        longName: 'Egg-Free',
        shortName: 'EF'
    },
    7: {
        longName: 'Sugar-Free',
        shortName: 'SF'
    },
    8: {
        longName: 'Shellfish',
        shortName: 'Shellfish'
    },
    9: {
        longName: 'Soy',
        shortName: 'Soy'
    }
};

export const HTTP_STATUS_BAD_REQUEST = 400;
export const HTTP_STATUS_CONFLICT = 409;
export const HTTP_STATUS_UNPROCESSABLE = 422;
