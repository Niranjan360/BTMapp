import Navbar from "./Navbar";

const Addmovie = () => {
    return ( 
        <div>
            <Navbar/>
            <h1>Add a new Movie</h1>

            <form>
                <input type="text" placeholder="Movie name"/>
                <input type="text" placeholder="Hero"/>
                <input type="text" placeholder="Heroine"/>
                <input type="text" placeholder="Director"/>
                <input type="text" placeholder="Production house"/>
                <input type="text" placeholder="Cast"/>
                <input type="text" placeholder="Heroine"/>
                <fieldset>
                    <legend align="center">Select movie gener</legend>
                    <input type="checkbox" name="gener" value="Action"/><label>Action</label>
                    <input type="checkbox" name="gener" value="Drama" /><label>Drama</label>
                    <input type="checkbox" name="gener" value="Comedy" /><label>Comedy</label>
                    <input type="checkbox" name="gener" value="Suspense" /><label>Suspense</label>
                    <input type="checkbox" name="gener" value="Thriller" /><label>Thriller</label>
                    <input type="checkbox" name="gener" value="Divine" /><label>Divine</label>
                    <input type="checkbox" name="gener" value="Romance" /><label>Romance</label>
                    <input type="checkbox" name="gener" value="Sci-fi" /><label>Sci-fi</label>
                    <input type="checkbox" name="gener" value="Horror" /><label>Horror</label>
                    <input type="checkbox" name="gener" value="fiction" /><label>fiction</label>
                </fieldset>

                <input type="text" placeholder="duration in Hrs and min" />
                <input type="date" placeholder="Release date"/>
                <input type="number" min="1" max="10" step="0.1" />

                <fieldset>
                    <legend align="center">Select movie languages available</legend>
                    <input type="checkbox" name="lang" value="Kannada"/><label>Kannada</label>
                    <input type="checkbox" name="lang" value="Hindi" /><label>Hindi</label>
                    <input type="checkbox" name="lang" value="Tamil" /><label>Tamil</label>
                    <input type="checkbox" name="lang" value="Telgu" /><label>Telgu</label>
                    <input type="checkbox" name="lang" value="Malayalam" /><label>Malayalam</label>
                </fieldset>

                <input type="url" placeholder="poster url"/>
                <input type="url" placeholder="banner url"/>
                <input type="url" placeholder="youtube trailer url"/>

                <textarea cols="100" rows="7"></textarea>

                <input type="submit" value="Add new movie" />
            </form>

        </div>
    );
}
export default Addmovie;