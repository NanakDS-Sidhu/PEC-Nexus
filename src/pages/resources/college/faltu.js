async function fileUpload(event) {
    const avatarFile = event.target.files[0]
    console.log(avatarFile)
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload('public/avatar1.png', avatarFile)
    console.log(data, error);

}
const handleBlob = (blob) => {
    const reader = new FileReader();
    reader.onload = () => seturl(reader.result);
    reader.readAsDataURL(blob);
};

async function fileDownload() {
    let sem;
    if (semActive === 1) {
        sem = dataFromChild * 2 - 1;
    } else {
        sem = dataFromChild * 2;
    }
    const path = "CollegeResources/" + Branch + "/Sem" + sem + "/";
    console.log(await supabase.storage.listBuckets(path))
    console.log(path);
    // const { data, error } = await supabase.storage.from('CollegeResources').download('public/avatar1.png')
    // console.log(data);
    // handleBlob(data);
}

{/* <h1 onClick={createNewBucket}>Create</h1> */}
            {/* <input type="file" onChange={fileUpload} />
            <h1 onClick={fileDownload}>Download</h1>
            <img src={url} alt="hello" />
            <button onClick={() => { fetchBranch() }}>Click </button> */}