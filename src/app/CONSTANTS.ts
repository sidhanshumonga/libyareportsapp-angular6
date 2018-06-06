
export const BASE_URL = "../../";
export const DATASETS_API = "dataSets.json?fields=name,id,attributeValues[value,attribute[id,name]]&paging=none";
export const USER_ORGUNIT = "me.json?fields=organisationUnits[children,id,name]";
export const OU_CHILDREN_BASE = "organisationUnits/";
export const OU_CHILDREN_FILTER = ".json?fields=id,children[id,name,children],ancestors[id,name]"

export const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "september", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }];

export const quarters = [
    { name: "January-March", value: "Q1" },
    { name: "April-June", value: "Q2" },
    { name: "July-September", value: "Q3" },
    { name: "October-December", value: "Q4" }];

export const sixmonths = [
    { name: "January-June", value: "S1" },
    { name: "July-December", value: "S2" },
];

export const weeks = [
    { name: "Week 1", value: "W01" },
    { name: "Week 2", value: "W02" },
    { name: "Week 3", value: "W03" },
    { name: "Week 4", value: "W04" },
    { name: "Week 5", value: "W05" },
    { name: "Week 6", value: "W06" },
    { name: "Week 7", value: "W07" },
    { name: "Week 8", value: "W08" },
    { name: "Week 9", value: "W09" },
    { name: "Week 10", value: "W10" },
    { name: "Week 11", value: "W11" },
    { name: "Week 12", value: "W12" },
    { name: "Week 13", value: "W13" },
    { name: "Week 14", value: "W14" },
    { name: "Week 15", value: "W15" },
    { name: "Week 16", value: "W16" },
    { name: "Week 17", value: "W17" },
    { name: "Week 18", value: "W18" },
    { name: "Week 18", value: "W19" },
    { name: "Week 20", value: "W20" },
    { name: "Week 21", value: "W21" },
    { name: "Week 22", value: "W22" },
    { name: "Week 23", value: "W23" },
    { name: "Week 24", value: "W24" },
    { name: "Week 25", value: "W25" },
    { name: "Week 26", value: "W26" },
    { name: "Week 27", value: "W27" },
    { name: "Week 28", value: "W28" },
    { name: "Week 29", value: "W29" },
    { name: "Week 30", value: "W30" },
    { name: "Week 31", value: "W31" },
    { name: "Week 32", value: "W32" },
    { name: "Week 33", value: "W33" },
    { name: "Week 34", value: "W34" },
    { name: "Week 35", value: "W35" },
    { name: "Week 36", value: "W36" },
    { name: "Week 37", value: "W37" },
    { name: "Week 38", value: "W38" },
    { name: "Week 39", value: "W39" },
    { name: "Week 40", value: "W40" },
    { name: "Week 41", value: "W41" },
    { name: "Week 42", value: "W42" },
    { name: "Week 43", value: "W43" },
    { name: "Week 44", value: "W44" },
    { name: "Week 45", value: "W45" },
    { name: "Week 46", value: "W46" },
    { name: "Week 47", value: "W47" },
    { name: "Week 48", value: "W48" },
    { name: "Week 49", value: "W49" },
    { name: "Week 50", value: "W50" },
    { name: "Week 51", value: "W51" },
    { name: "Week 52", value: "W52" },
    { name: "Week 53", value: "W53" },
];

export const years = [
    "2018",
    "2017",
    "2016"
];

export const periods = [
    "Weekly",
    "Monthly",
    "Quarterly",
    "Six-monthly",
    "Yearly"
];

export const DATASET_ID_EWARN_REPORT = [{ id: "h1Q03rJqNQr", name: "EWARN Reporting Dataset" }];

//phc datasets uid
export const DATASETS_ID_PHC = [
    { id: 'sl7pTQ0lY4K', name: "Population Data Set" },
    { id: 'yY9r5kbus3t', name: "PHC OPD Dataset" },
    { id: 'DVEYU2A2aF2', name: "PHC Emergency Care Dataset" },
    { id: 'WRzYEN981Nb', name: "Dental Services Dataset" },
    { id: 'dL7jX6E0UOB', name: "Diabetes Services Dataset" },
    { id: 'NL5AxxiJt31', name: "MCH and Family Planning Dataset" },
    { id: 'jqSaKxtj8IA', name: "Immunisation Dataset" },
    { id: 'i5doaVaayYN', name: "PHC Radiology Services Dataset" },
    { id: 'YcywkvYogw3', name: "PHC Laboratory Services Dataset" },
    { id: 'qq8aqH1YPjT', name: "Essential Drugs and Consumables Stocks Dataset" },
    { id: 'Ri1mp3YgF3s', name: "PHC Human Resource Dataset" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }];

export const DATASETS_ID_HOSPITAL = [
    { id: 'IgbqlaxE83v', name: "Hospital OPD Services Dataset" },
    { id: 'tgGyJAaIahr', name: "Hospital/Medical Centre Emergency Care Dataset" },
    { id: 'bGnNmKSuZlw', name: "Hospital IPD Services Dataset" },
    { id: 'vQeZkk8Fz2y', name: "Hospital/Medical Centre Delivery and Birth Services Dataset" },
    { id: 'CFDWUtgFaSX', name: "Hospital Surgery Services Dataset" },
    { id: 'ShLvZi45WYv', name: "Hospital/Medical Centre Radiology Services Dataset" },
    { id: 'FN9wO5d2jmN', name: "Hospital/Medical Centre Laboratory and Blood Bank Services Dataset" },
    { id: 'TKR665WfTQd', name: "Hospital Human Resource Dataset" },
    { id: 'NVirEUvg4lE', name: "Hospital/Medical Centre Infectious Disease and Deaths Dataset" },
    { id: 'fyIza2Ggy2G', name: "Hospital/Medical Centre Infectious Disease Dataset (Age group)" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }];

export const DATASETS_ID_MEDICALCENTER = [
    { id: 'KeIRqetnAE2', name: "Medical Centre OPD Services Dataset" },
    { id: 'tgGyJAaIahr', name: "Hospital/Medical Centre Emergency Care Dataset" },
    { id: 'hOAXV4EYKNG', name: "Medical Centre IPD Services Dataset" },
    { id: 'vQeZkk8Fz2y', name: "Hospital/Medical Centre Delivery and Birth Services Dataset" },
    { id: 'EUzM2mlJQm4', name: "Medical Centre Surgery Services Dataset" },
    { id: 'ShLvZi45WYv', name: "Hospital/Medical Centre Radiology Services Dataset" },
    { id: 'FN9wO5d2jmN', name: "Hospital/Medical Centre Laboratory and Blood Bank Services Dataset" },
    { id: 'w9qPPMwmPJy', name: "Medical Centre Human Resource Dataset" },
    { id: 'NVirEUvg4lE', name: "Hospital/Medical Centre Infectious Disease and Deaths Dataset" },
    { id: 'fyIza2Ggy2G', name: "Hospital/Medical Centre Infectious Disease Dataset (Age group)" },
    { id: 'n71AgyCV7gp', name: "Physiotherapy Services Dataset" }];