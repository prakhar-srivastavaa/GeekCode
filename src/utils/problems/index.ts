import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";



interface ProblemMap {
    [key: string]: Problem;
}

// export type Problem = {
//     id: number;
//     title: string;
//     problemStatement: string;
//     examples: Example[];
//     constraints: string[];
//     order: number;
//     starterCode: string;
//     handlerFunction: ((fn: any) => boolean) | string;
//     starterFunctionName: string;
// };
export const problems: ProblemMap = {
    "two-sum": twoSum,
    "reverse-linked-list": reverseLinkedList,
    "jump-game": jumpGame,
    "valid-parentheses": validParentheses,
    "search-a-2d-matrix": search2DMatrix,
}