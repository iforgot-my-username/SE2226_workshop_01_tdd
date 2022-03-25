export default interface GenderizeModel {
    name: string;
    gender: string | null;
    probability: number;
    count: number
}