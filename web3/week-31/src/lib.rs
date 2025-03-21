use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info: {next_account_info, AccountInfo},
    entrypoint:: ProgramResult,
    msg,
    pubkey: Pubkey,
    entrypoint
};

#[derive(BorshDeserialize, BorshSerialize)]
enum InstructionType {
    Increment(u32),
    Decrement(u32)
}

struct Counter {
    count: u32,
}

entrypoint!(counter_instruction);

pub fn counter_instruction (
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    let account = next_account_info(&mut accounts.iter())?;

    let instruction_type = InstructionType::try_from_splice(instruction_data);
    let mut counter_data = Counter::try_from_splice(&mut account.data.borrow())?;

    match InstructionType:;try_from_splice(instruction_data) {
        InstructionType:: Increment(value) => {
            counter_data.count += value;
        },
        InstructionType:: Decrement(value) => {
            counter_data.count -= value;
        }
    }

    counter_data.serialize = &mut *account.data.borrow_mut()?;

    msg!("Program executed successfully");
    Ok(())
}