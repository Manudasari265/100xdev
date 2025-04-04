// #![allow(unused_variables)]
// #![allow(unexpected_cfgs)]
// use pinocchio::{
//     ProgramResult, account_info::AccountInfo, entrypoint, msg, program_error::ProgramError,
//     pubkey::Pubkey,
// };

// entrypoint!(process_instruction);

// pub fn process_instruction(
//     program_id: &Pubkey,
//     accounts: &[AccountInfo],
//     instruction_data: &[u8],
// ) -> ProgramResult {
//     let from: &AccountInfo = &accounts[0];
//     let to: &AccountInfo = &accounts[1];

//     let amount = 1_000_000_000;

//     let log_message = format!(
//         "Transferring {} lamports from {:?} to {:?}",
//         amount,
//         from.key(),
//         to.key()
//     );

//     msg!(&log_message);

//     if from.lamports() < amount {
//         return Err(ProgramError::InsufficientFunds);
//     }

//     let mut from_lamports = from.try_borrow_mut_lamports()?;
//     let new_from_lamports = from_lamports
//         .checked_sub(amount)
//         .ok_or(ProgramError::ArithmeticOverflow)?;
//     *from_lamports = new_from_lamports;

//     let mut to_lamports = to.try_borrow_mut_lamports()?;
//     let new_to_lamports = to_lamports
//         .checked_add(amount)
//         .ok_or(ProgramError::ArithmeticOverflow)?;
//     *to_lamports = new_to_lamports;

//     msg!("Transfer complete!");

//     msg!("Hello from my program!");
//     Ok(())
// }

#![no_std]

use pinocchio::{
    account_info::AccountInfo,
    entrypoint,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
    ProgramResult,
};

use pinocchio::invoke;
use pinocchio::instructions::system::transfer;

/// Entrypoint macro for standard use-case
entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    if accounts.len() < 3 {
        msg!("Not enough accounts passed.");
        return Err(ProgramError::NotEnoughAccountKeys);
    }

    let payer = &accounts[0];      // must be signer
    let receiver = &accounts[1];   // must be writable
    let system_program = &accounts[2]; // must be system_program

    let amount = 1_000_000_000; // 1 SOL in lamports

    if !payer.is_signer() {
        msg!("Payer must be a signer");
        return Err(ProgramError::MissingRequiredSignature);
    }

    msg!("Transferring lamports...");

    let ix = transfer(payer.key(), receiver.key(), amount);
    invoke(&ix, &[payer.clone(), receiver.clone(), system_program.clone()])?;

    msg!("Transfer successful.");
    Ok(())
}