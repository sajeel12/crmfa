const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')


// lead Model 
const Lead = require('../../models/Lead')

// get request 
router.get('/', (req, res) => {
    // console.log(req.user.id);
    Lead.find()
        .sort({ recieveddate: -1})
        .then(leads => res.json(leads))
})

// Post request  
router.post('/', (req, res) => {
    const newLead = new Lead({
        
        owner: req.body.owner,
        fullname: req.body.fullname,
        email: req.body.email,
        phoneno: req.body.phoneno,
        originaddress: req.body.originaddress,
        origincity: req.body.origincity,
        originstate: req.body.originstate,
        originzipcode: req.body.originzipcode,
        destinationaddress: req.body.destinationaddress,
        destinationcity: req.body.destinationcity,
        destinationstate: req.body.destinationstate,
        destinationzipcode: req.body.destinationzipcode,
        model: req.body.model,
        make: req.body.make,
        vehicletype: req.body.vehicletype
    });
    newLead.save()
        .then(lead => res.json(lead));
});

// delete request  
router.delete('/:id' ,(req, res) => {
    Lead.findById(req.params.id)
        .then(lead => lead.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});





module.exports = router;