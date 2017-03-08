var factoryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_saltHash","type":"bytes32"},{"name":"_saltNHash","type":"bytes32"}],"name":"createRound","outputs":[{"name":"","type":"address"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"shutdown","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRound","type":"address"},{"indexed":false,"name":"version","type":"string"}],"name":"LotteryRoundCreated","type":"event"}]);
var factoryCode = '60a0604052600560608190527f302e312e32000000000000000000000000000000000000000000000000000000608090815261003e9160029190610061565b505b60018054600160a060020a03191633600160a060020a03161790555b610101565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a257805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100cf5782518255916020019190600101906100b4565b5b506100dc9291506100e0565b5090565b6100fe91905b808211156100dc57600081556001016100e6565b5090565b90565b6116f7806101106000396000f300606060405236156100515763ffffffff60e060020a60003504166320e12a4381146100665780633ccfd60b14610090578063f2fde38b146100a2578063fc0e74d1146100c0578063ffa1ad74146100d2575b341561005957fe5b6100645b610000565b565b005b610074600435602435610162565b60408051600160a060020a039092168252519081900360200190f35b341561009857fe5b610064610338565b005b34156100aa57fe5b610064600160a060020a036004351661038c565b005b34156100c857fe5b6100646103d4565b005b34156100da57fe5b6100e2610400565b604080516020808252835181830152835191928392908301918501908083838215610128575b80518252602083111561012857601f199092019160209182019101610108565b505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600154600090819033600160a060020a0390811691161461018257610000565b60003411156101bc5734848461019661048b565b91825260208201526040805191829003019082f08015156101b357fe5b905090506101e7565b83836101c661048b565b9182526020820152604080519182900301906000f08015156101e457fe5b90505b600160a060020a03811615156101fc57610000565b600154604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519183169163f2fde38b9160248082019260009290919082900301818387803b151561025f57fe5b60325a03f1151561026c57fe5b505060408051600160a060020a0384168152602081018281526002805460001961010060018316150201168190049383018490527fdb0d7ce5ee9b1425c4333cbe645775ff79ad6a0cbd091ad4d8e6e0fbca59ebe5945085939092919060608301908490801561031d5780601f106102f25761010080835404028352916020019161031d565b820191906000526020600020905b81548152906001019060200180831161030057829003601f168201915b5050935050505060405180910390a18091505b5b5092915050565b60015433600160a060020a0390811691161461035357610000565b600154604051600160a060020a039182169130163180156108fc02916000818181858888f19350505050151561006257610000565b5b5b565b60015433600160a060020a039081169116146103a757610000565b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60015433600160a060020a039081169116146103ef57610000565b600154600160a060020a0316ff5b5b565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104835780601f1061045857610100808354040283529160200191610483565b820191906000526020600020905b81548152906001019060200180831161046657829003601f168201915b505050505081565b6040516112308061049c833901905600606060408181526006805464ff00000000191690556000600a55806112308339810160405280516020909101515b5b60028054600160a060020a03191633600160a060020a03161790555b600382905560048190554361a8c00160058181556040805180820182529182527f302e312e320000000000000000000000000000000000000000000000000000006020808401918252825187815290810186905291820184905260806060830181815284519184019190915283517fe0df53b9784676e1b879e06a00ccf058cae841a076213af4060b9951b20bbe01958895889591949093919260a0840191908083838215610114575b80518252602083111561011457601f1990920191602091820191016100f4565b505050905090810190601f1680156101405780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1600019430140600e555b50505b6110c48061016c6000396000f300606060405236156101175763ffffffff60e060020a60003504166321e0f228811461012c578063281800231461015957806336b094741461017b5780633947050f1461019f5780633a3bdf56146101a95780633ccfd60b146101c757806345f472fc146101d95780635c49d96c146101fb5780635c76ca2d1461021d5780636494d4771461024157806366fa2be91461026357806370740ac91461029f578063719ce73e146102b15780637d2026cd146102d3578063825c3e36146102e55780638827932014610300578063a2fb117514610322578063a8492f4614610351578063b94bc7fe14610368578063d5b2a01a14610395578063d6779b01146103b7578063f2fde38b146103e7578063fc0e74d114610405575b341561011f57fe5b61012a5b610000565b565b005b341561013457fe5b61013c610417565b60408051600160e060020a03199092168252519081900360200190f35b341561016157fe5b610169610423565b60408051918252519081900360200190f35b341561018357fe5b61018b610429565b604080519115158252519081900360200190f35b61012a61043a565b005b34156101b157fe5b61012a600160a060020a036004351661051e565b005b34156101cf57fe5b61012a6105a4565b005b34156101e157fe5b61016961062c565b60408051918252519081900360200190f35b341561020357fe5b610169610632565b60408051918252519081900360200190f35b341561022557fe5b61018b610638565b604080519115158252519081900360200190f35b341561024957fe5b6101696106f4565b60408051918252519081900360200190f35b341561026b57fe5b610283600160e060020a0319600435166024356106fa565b60408051600160a060020a039092168252519081900360200190f35b34156102a757fe5b61012a61073c565b005b34156102b957fe5b6101696107c4565b60408051918252519081900360200190f35b34156102db57fe5b61012a6107ca565b005b34156102ed57fe5b61012a60043560ff602435166108e6565b005b341561030857fe5b6101696109a0565b60408051918252519081900360200190f35b341561032a57fe5b6102836004356109a6565b60408051600160a060020a039092168252519081900360200190f35b61012a600160e060020a0319600435166109d8565b005b341561037057fe5b61018b60043560ff60243516610b25565b604080519115158252519081900360200190f35b341561039d57fe5b610169610bc8565b60408051918252519081900360200190f35b34156103bf57fe5b61018b600160a060020a0360043516610bce565b604080519115158252519081900360200190f35b34156103ef57fe5b61012a600160a060020a0360043516610be3565b005b341561040d57fe5b61012a610c2b565b005b60065460e060020a0281565b60055481565b600654640100000000900460ff1681565b6000600060055443111561044d57610000565b3466038d7ea4c680001461046057610000565b610472600160a060020a033316610c8b565b915061047d82610d6b565b600160e060020a031981166000908152600960205260409020805491925090600181016104aa838261104d565b916000526020600020900160005b8154600160a060020a033381166101009390930a83810291021990911617909155600a80546001019055604051600160e060020a0319841692507fd3ebf454e78fe007cc3a3b4cc3a453e32fa124cfcc573e4b60f0c94fd2f0428e90600090a35b5b5050565b60025460009033600160a060020a0390811691161461053c57610000565b600654640100000000900460ff16151561055557610000565b6000600d5411156105195750600d80546000918290556040519091600160a060020a0384169183156108fc0291849190818181858888f19350505050151561051957610000565b5b5b5b5b5050565b60025433600160a060020a039081169116146105bf57610000565b600654640100000000900460ff1615156105d857610000565b6105e0610638565b80156105ec5750600d54155b1561012857600254604051600160a060020a039182169130163180156108fc02916000818181858888f19350505050151561012857610000565b5b5b5b5b565b60045481565b600a5481565b60065460009081908190640100000000900460ff16151561065c57600092506106ee565b60075460009011156106e957506001905060005b81801561067e575060075481105b156106e1578180156106d657506008600060078381548110151561069e57fe5b906000526020600020900160005b9054600160a060020a036101009290920a900416815260208101919091526040016000205460ff16155b91505b600101610670565b8192506106ee565b600192505b5b505090565b60035481565b60096020528160005260406000208181548110151561071557fe5b906000526020600020900160005b915091509054906101000a9004600160a060020a031681565b600654640100000000900460ff16151561075557610000565b600160a060020a03331660009081526008602052604090205460ff16151561077c57610000565b600160a060020a033316600081815260086020526040808220805460ff19169055600c54905181156108fc0292818181858888f19350505050151561012857610000565b5b5b565b600b5481565b6002546000908190819033600160a060020a039081169116146107ec57610000565b600654640100000000900460ff16151561080557610000565b60075460009011156108dd57600092505b6007548310156108dd57600780548490811061082e57fe5b906000526020600020900160005b9054600160a060020a036101009290920a90041660008181526008602052604090205490925060ff16905080156108d057600160a060020a038216600081815260086020526040808220805460ff19169055600c54905181156108fc0292818181858888f1935050505015156108d057600160a060020a0382166000908152600860205260409020805460ff191660011790555b5b5b600190920191610816565b5b5b5b5b505050565b60025460009033600160a060020a0390811691161461090457610000565b6005544311158061091f5750600654640100000000900460ff165b1561092957610000565b600654640100000000900460ff1615156001141561094657610000565b6109508383610b25565b151560011461095e57610000565b50600a54600e5460408051858152602081019390935282810191909152519081900360600190206108dd838361099384610d6b565b610e4b565b5b5b5b505050565b600c5481565b60078054829081106109b457fe5b906000526020600020900160005b915054906101000a9004600160a060020a031681565b60006005544311156109e957610000565b3466038d7ea4c68000146109fc57610000565b5060005b60048160ff161015610a6c578160ff821660048110610a1b57fe5b1a60f860020a02600160f860020a031916603f60f860020a02838360ff16600481101515610a4557fe5b1a60f860020a0216600160f860020a031916141515610a6357610000565b5b600101610a00565b600160e060020a031982166000908152600960205260409020805460018101610a95838261104d565b916000526020600020900160005b8154600160a060020a033381166101009390930a9283029202191617905550600a80546001019055610ade600160e060020a03198316610c8b565b50604051600160e060020a0319831690600160a060020a033316907fd3ebf454e78fe007cc3a3b4cc3a453e32fa124cfcc573e4b60f0c94fd2f0428e90600090a35b5b5050565b6040805183815260f860020a60ff841602602082015260218101849052905190819003604101902060045460009190829081908314610b675760009350610bbf565b505060408051858152905190819003602001902060015b8460ff168160ff161015610ba857604080519283525191829003602001909120905b600101610b7e565b6003548214610bba5760009350610bbf565b600193505b50505092915050565b600d5481565b60086020526000908152604090205460ff1681565b60025433600160a060020a03908116911614610bfe57610000565b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60025433600160a060020a03908116911614610c4657610000565b600654640100000000900460ff161515610c5f57610000565b610c67610638565b8015610c735750600d54155b1561012857600254600160a060020a0316ff5b5b5b5b565b600e546040805160006020918201819052825185815244818401526c01000000000000000000000000600160a060020a034116028185015242605482015260748101949094529151919283928392839260029260948083019392829003018186866161da5a03f11515610cfa57fe5b5050604080518051600e80544380855260001960ff9094169081900393909301804060208087019190915244868801524260608701526080860183905286519586900360a001862092865285018290528551948590039095019093209055909550935091508390505b505050919050565b60008080805b60048160ff161015610e3f578460005b604080519788526c01000000000000000000000000600160a060020a033316026020808a019190915290519788900360340190972096601f60f860020a9390921a8302929092041692507f3f0000000000000000000000000000000000000000000000000000000000000090869084908110610df957fe5b1a60f860020a0216600160f860020a0319166008847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060020a90041792505b600101610d71565b8293505b505050919050565b6006805464010000000063ffffffff1990911660e060020a8085049190911764ff00000000191691909117918290556040805186815260ff8616602082015230600160a060020a031631818301529051600093849384939102600160e060020a031916917fbdec5cceedfa16447f568590f26330080da275219b1b3202ba49d688b05115d2916060908290030190a260065460e060020a02600160e060020a03191660009081526009602052604081208054909450111561104457600091505b8254821015611007578282815481101515610f2257fe5b906000526020600020900160005b9054600160a060020a036101009290920a90041660008181526008602052604090205490915060ff161515610ffb576007805460018101610f71838261104d565b916000526020600020900160005b8154600160a060020a038086166101009390930a83810291021990911617909155600081815260086020526040808220805460ff191660011790556006549051600160e060020a031960e060020a9092029190911693507f345d116f453f37af02368f0e2ecffe16a2ae3f99b089f4c00355c1dfd36c62639190a35b5b600190910190610f0b565b6103e8600160a060020a033016316103b6025b04600b8190556007549081151561102d57fe5b04600c55600b54600160a060020a0330163103600d555b5b505050505050565b8154818355818115116108dd576000838152602090206108dd918101908301611077565b5b505050565b61109591905b80821115611091576000815560010161107d565b5090565b905600a165627a7a72305820be97acb3162a0b0ca62cabed274404a73ca5b508b6e64b12e5d6c2a2437f1f720029a165627a7a72305820f9fd0d37e28429414518f46352d1607babc4a9b47c1285f23c2287874b62c7f80029';
var logicContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"saltHash","type":"bytes32"},{"name":"saltNHash","type":"bytes32"}],"name":"startRound","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isUpgradeAllowed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalizeRound","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"roundFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentRound","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"salt","type":"bytes32"},{"name":"N","type":"uint8"}],"name":"closeRound","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"curator","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newCurator","type":"address"}],"name":"setCurator","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"shutdown","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_roundFactory","type":"address"},{"name":"_curator","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]);
var logicCode = '6060604052341561000c57fe5b604051604080610acb8339810160405280516020909101515b5b60018054600160a060020a03191633600160a060020a03161790555b60028054600160a060020a03808516600160a060020a03199283161790925560038054928416929091169190911790555b50505b610a46806100856000396000f3006060604052361561009e5763ffffffff60e060020a6000350416630f6e40c381146100c35780631c0463de146100db5780631e820325146100ff5780633ccfd60b1461012b5780635485868a1461013d5780638a19c8bc14610169578063b3ca07d114610195578063d0e30db0146101b0578063e66f53b7146101ba578063e90956cf146101e6578063f2fde38b14610204578063fc0e74d114610222575b6100c15b60045433600160a060020a039081169116146100bd57610000565b5b5b565b005b34156100cb57fe5b6100c1600435602435610234565b005b34156100e357fe5b6100eb6103a9565b604080519115158252519081900360200190f35b341561010757fe5b61010f6103db565b60408051600160a060020a039092168252519081900360200190f35b341561013357fe5b6100c1610702565b005b341561014557fe5b61010f610756565b60408051600160a060020a039092168252519081900360200190f35b341561017157fe5b61010f610765565b60408051600160a060020a039092168252519081900360200190f35b341561019d57fe5b6100c160043560ff60243516610774565b005b6100c161091c565b005b34156101c257fe5b61010f610952565b60408051600160a060020a039092168252519081900360200190f35b34156101ee57fe5b6100c1600160a060020a0360043516610961565b005b341561020c57fe5b6100c1600160a060020a03600435166109b3565b005b341561022a57fe5b6100c16109ee565b005b60035433600160a060020a0390811691161461024f57610000565b600454600160a060020a03161561026557610000565b600030600160a060020a031631111561031257600254604080516000602091820152815160e060020a6320e12a4302815260048101869052602481018590529151600160a060020a03938416936320e12a4393309091163192604480830193919282900301818588803b15156102d757fe5b61235a5a03f115156102e557fe5b50506040515160048054600160a060020a031916600160a060020a03909216919091179055506103a29050565b6002546040805160006020918201819052825160e060020a6320e12a4302815260048101879052602481018690529251600160a060020a03909416936320e12a439360448082019493918390030190829087803b151561036e57fe5b60325a03f1151561037b57fe5b50506040515160048054600160a060020a031916600160a060020a03909216919091179055505b5b5b5b5050565b600454600090600160a060020a03161580156103d5575066038d7ea4c6800030600160a060020a031631105b90505b90565b600154600090819033600160a060020a039081169116146103fb57610000565b600454600160a060020a031615806104805750600460009054906101000a9004600160a060020a0316600160a060020a03166336b094746000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b151561046957fe5b60325a03f1151561047657fe5b5050604051511590505b1561048a57610000565b5060048054604080516000602091820181905282517f5c76ca2d0000000000000000000000000000000000000000000000000000000081529251600160a060020a03909416948594635c76ca2d9480830194939192908390030190829087803b15156104f257fe5b60325a03f115156104ff57fe5b505060405151151590506105f15760048054604080517f7d2026cd0000000000000000000000000000000000000000000000000000000081529051600160a060020a0390921692637d2026cd92828201926000929082900301818387803b151561056557fe5b60325a03f1151561057257fe5b505060048054600354604080517f3a3bdf56000000000000000000000000000000000000000000000000000000008152600160a060020a03928316948101949094525191169250633a3bdf569160248082019260009290919082900301818387803b15156105dc57fe5b60325a03f115156105e957fe5b505050610671565b6004546000600160a060020a039091163111156106715760048054604080517f3ccfd60b0000000000000000000000000000000000000000000000000000000081529051600160a060020a0390921692633ccfd60b92828201926000929082900301818387803b151561066057fe5b60325a03f1151561066d57fe5b5050505b5b60048054600354604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a03928316948101949094525191169163f2fde38b91602480830192600092919082900301818387803b15156106d857fe5b60325a03f115156106e557fe5b505060048054600160a060020a0319169055509050805b5b5b5090565b60015433600160a060020a0390811691161461071d57610000565b600154604051600160a060020a039182169130163180156108fc02916000818181858888f1935050505015156100bd57610000565b5b5b565b600254600160a060020a031681565b600454600160a060020a031681565b60035433600160a060020a0390811691161461078f57610000565b600454600160a060020a031615806108165750600460009054906101000a9004600160a060020a0316600160a060020a031663281800236000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b15156107fd57fe5b60325a03f1151561080a57fe5b50506040515143111590505b806108925750600460009054906101000a9004600160a060020a0316600160a060020a03166336b094746000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b151561087757fe5b60325a03f1151561088457fe5b505060405151151560011490505b1561089c57610000565b60048054604080517f825c3e3600000000000000000000000000000000000000000000000000000000815292830185905260ff8416602484015251600160a060020a039091169163825c3e3691604480830192600092919082900301818387803b151561090557fe5b60325a03f1151561091257fe5b5050505b5b5b5050565b60015433600160a060020a0390811691161461093757610000565b600454600160a060020a0316156100bd57610000565b5b5b5b565b600354600160a060020a031681565b60035433600160a060020a0390811691161461097c57610000565b600454600160a060020a03161561099257610000565b60038054600160a060020a031916600160a060020a0383161790555b5b5b50565b60015433600160a060020a039081169116146109ce57610000565b60018054600160a060020a031916600160a060020a0383161790555b5b50565b60015433600160a060020a03908116911614610a0957610000565b600154600160a060020a0316ff5b5b5600a165627a7a723058201e66d13d85b48b581628c03645f70d8b01f9ccfdd45a36790e7f8b06dc9fa7b40029';
var lottoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"gameLogic","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalizeRound","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newLogic","type":"address"}],"name":"setNewGameLogic","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentRound","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"previousRounds","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"previousRoundsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"shutdown","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialGameLogic","type":"address"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"}]);
var lottoCode = '6060604052341561000c57fe5b60405160208061063983398101604052515b5b60008054600160a060020a03191633600160a060020a03161790555b60028054600160a060020a031916600160a060020a0383161790555b505b6105d1806100686000396000f3006060604052361561007d5763ffffffff60e060020a600035041663134087a281146100925780631e820325146100be5780632dd5b58e146100d05780633ccfd60b146100ee5780638a19c8bc146101005780639aa92f0c1461012c578063eac8221e1461015b578063f2fde38b1461017d578063fc0e74d11461019b575b341561008557fe5b6100905b610000565b565b005b341561009a57fe5b6100a26101ad565b60408051600160a060020a039092168252519081900360200190f35b34156100c657fe5b6100906101bc565b005b34156100d857fe5b610090600160a060020a0360043516610297565b005b34156100f657fe5b6100906103d8565b005b341561010857fe5b6100a2610430565b60408051600160a060020a039092168252519081900360200190f35b341561013457fe5b6100a26004356104ad565b60408051600160a060020a039092168252519081900360200190f35b341561016357fe5b61016b6104df565b60408051918252519081900360200190f35b341561018557fe5b610090600160a060020a03600435166104e6565b005b34156101a357fe5b61009061052e565b005b600254600160a060020a031681565b6000805433600160a060020a039081169116146101d857610000565b600254604080516000602091820181905282517f1e8203250000000000000000000000000000000000000000000000000000000081529251600160a060020a0390941693631e8203259360048082019493918390030190829087803b151561023c57fe5b60325a03f1151561024957fe5b505060405151600180549193509150808201610265838261055a565b916000526020600020900160005b8154600160a060020a038086166101009390930a92830292021916179055505b5b50565b60005433600160a060020a039081169116146102b257610000565b600254604080516000602091820181905282517f1c0463de0000000000000000000000000000000000000000000000000000000081529251600160a060020a0390941693631c0463de9360048082019493918390030190829087803b151561031657fe5b60325a03f1151561032357fe5b5050604051511515905061033657610000565b60025460008054604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201529051919093169263f2fde38b92602480830193919282900301818387803b151561039a57fe5b60325a03f115156103a757fe5b50506002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038416179055505b5b5b50565b60005433600160a060020a039081169116146103f357610000565b60008054604051600160a060020a0391821692309092163180156108fc0292909190818181858888f19350505050151561008e57610000565b5b5b565b600254604080516000602091820181905282517f8a19c8bc00000000000000000000000000000000000000000000000000000000815292519093600160a060020a031692638a19c8bc92600480830193919282900301818787803b151561049357fe5b60325a03f115156104a057fe5b5050604051519150505b90565b60018054829081106104bb57fe5b906000526020600020900160005b915054906101000a9004600160a060020a031681565b6001545b90565b60005433600160a060020a0390811691161461050157610000565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60005433600160a060020a0390811691161461054957610000565b600054600160a060020a0316ff5b5b565b81548183558181151161057e5760008381526020902061057e918101908301610584565b5b505050565b6104aa91905b8082111561059e576000815560010161058a565b5090565b905600a165627a7a72305820d01f4cb494882a33f4acdda609ac297ac4688b4d7caebeaf531aed06a1934e900029';

function getDeployFactoryCode() {
  return factoryContract.new.getData({
    data: '0x' + factoryCode,
    from: account,
    gas: '2000000'
  });
}

function getDeployLogicCode(factoryAddress, curator) {
  return logicContract.new.getData(factoryAddress, curator, {
    data: '0x' + logicCode,
    from: account,
    gas: '2000000'
  });
}

function getDeployLottoCode(logicAddress) {
  return lottoContract.new.getData(logicAddress, {
    data: '0x' + lottoCode,
    from: account,
    gas: '2000000'
  });
}