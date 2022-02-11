import {connect} from 'react-redux'
import Home from '../components/Home'
import { addtocard ,removetocard} from '../services/Actions/actions';

const mapDispatchToProps =dispatch =>({
    addtocardHandler:data=>dispatch(addtocard(data)),
    removetocardHandler :()=>dispatch(removetocard())
})

const mapStateToProps=state =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

