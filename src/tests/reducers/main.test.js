import reducer from '../../reducers/main'; 
import { initialState } from '../../reducers/main'; 

describe('main', () => {
    it('return initial state if not passed an action', () => {
        expect(reducer(initialState).data).toEqual('Hello')
    }); 
}); 