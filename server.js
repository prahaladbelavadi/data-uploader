const morgan = require( 'morgan' );
const express = require( 'express' );
const multer = require( 'multer' );

const app = express();
const upload = multer( { dest: 'uploads/' } );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( morgan( 'dev' ) );

app.get( '/', ( req, res ) => { res.json( "working" ); } );


app.post( '/', upload.single( 'file' ), ( req, res ) => {

    if ( !req.file ) {
        console.log( "No file received" );
        return res.send( {
            success: false
        } );

    } else {
        console.log( 'file received\n' );
        console.log(req.file)

        return res.send( {
            success: true
        } );
    }
} );


app.listen( 3001, () => {
    console.log( "listening at 3001" );
} );