import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async(req,{params})=> { 

    try{
        await connectToDB();

        const prompt= await Prompt.findById(params.id).populate('creator');

        if(!prompt){
            return new Response(JSON.stringify("Prompt Not Found"), {status: 404});
            
        }

        return new Response(JSON.stringify(prompt), {status: 200});
    }catch(error){
        
        console.log(error);
        return new Response(JSON.stringify("Failed to fetch all Prompts"), {status: 500});

    }
}




export const PATCH = async(req,{params})=> { 
    const {prompt, tag}= await request.json();

    try{
        await connectToDB();

        const existingPrompt= await Prompt.findById(params.id).populate('creator');

        if(!existingPrompt){
            return new Response("Prompt Not Found", {status: 404});
            
        }

        existingPrompt.prompt= prompt;
        existingPrompt.tag=tag;

        await existingPrompt.save();
        return new Response(JSONstringify(existingPrompt), {status: 200});
    }catch(error){
        
        console.log(error);
        return new Response("Failed to update Prompt", {status: 500});

    }
}




export const DELETE = async(req,{params})=> { 

    try{
        await connectToDB();

        const existingPrompt= await Prompt.findByIdAndRemove(params.id);

        return new Response(JSONstringify("Prompt Deleted Succesfully"), {status: 200});
    }catch(error){
        
        console.log(error);
        return new Response("Failed to delete Prompt", {status: 500});

    }
}
