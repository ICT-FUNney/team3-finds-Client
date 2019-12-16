import {MOVE_DOC_DETAIL} from "../actions/actionTypes";

const initState={
    target:JSON.parse(sessionStorage.getItem("finds-target"))||null
};

export default function selectDocReducer(state=initState,action){
    switch(action.type){
        case MOVE_DOC_DETAIL:
            const {name,creator,creatorLevel,creatorImg,likes,reviews,dl,description,comments,autherId,thumbnail}=action.payload;
            const tmp = { name, creator, creatorLevel, creatorImg, likes, reviews, dl, description, comments, autherId, thumbnail}
            sessionStorage.setItem("finds-target",tmp);
            return {target:action.payload};
        default:
            return state;
    }
}