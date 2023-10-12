import { Request,Response } from "express";
import { transferList } from "../config/schema";

const getAllTransferList = async(req: Request, res: Response) => {
    try {
        const transfer = await transferList.find({isDeleted:{$exists:false}});
        return res.status(200).json({
            success: true,
            message: "Success Get All The Transfer List.",
            data: transfer
        });
    }

    catch(error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Retrieve Data Transfer Failed."
        });
    }
};

const getTransferList = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const transfer = await transferList.findById{id}
        if (!transfer) {
            return res.status(404).json({
                message: "Transfer List is not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Get Transfer List Success!",
            data: transfer
        });
    }

    catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error Getting Data!"
        });
    }
};

const createTransferData = async (req: Request, res: Response) => {
    try{
        const {transfer} = req.body
        const newTransferData = await transferList.create({transfer})
        return res.status(200).json({
            success: true,
            message: "Create Data Transfer Success!",
            data: transfer
        })
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            message: error
        });
    }
};

const updateTransferData = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        console.log(req.body);

        const updateStatusTransfer = await transferList.updateOne({_id: id}, {status: status});
        if (updateStatusTransfer.modifiedCount > 0) {
            return res.status(200).json({
                success: true,
                message: "Data Update Success!",
                data: {
                    status: status
                }
            });
        }
        
        else {
            return res.status(404).json({
                success: false,
                message: "Data Failed to Update"
            });
        }
    }

    catch(error){
        console.log('Update Data Status Error:', error);
        return res.status(500).json({
            success: false,
            message: "An Error has occurred while updating the data!"
        });
    }
};

const deleteTransferData = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deleteTransferData = await transferList.findByIdAndUpdate(id, {$set: {isDeleted: true}}, {new: true});
        
        if (deleteTransferData) {
            return res.status(200).json({
                success: true,
                message: "Data Transfer Deleted!",
                data: deleteTransferData
            });
        }
        
        else{
            return res.status(404).json({
                success: false,
                message: "Transfer Data is not found!"
            });
        }
    }

    catch(error){
        console.log('Deleted Data Errror:', error);
        return res.status(500).json({
            success: false,
            message: "An Error has occured while deleting data!"
        });
    }
};

export {createTransferData, getAllTransferList, getTransferList, updateTransferData, deleteTransferData};