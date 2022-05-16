import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {Loader} from './';

const Welcome = () =>
{
    const connectWallet = () =>
    {

    }

    return (
        
        <div className=''>

            <div className=''>
                <div className=''>
                   <h1>Send Cryopto <br/> across the world</h1> 
                   <p>Explore the Cryopto world. Buy and Sell Cryoptocurrencies easily on cryopto.</p>
                   <button type='button' onClick={connectWallet} className=''>Connect Wallet</button>

                </div>

            </div>

        </div>
    );
}

export default Welcome;
