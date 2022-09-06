import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
    >
        <form action="" className="infoForm">
            <h3>Your info</h3>
            <div>
              <input className="infoInput" 
                placeholder='First Name' 
                name='first name'/>
              <input className="infoInput" 
                placeholder='Last Name' 
                name='last name'/>
            </div>
            <div>
              <input className="infoInput" 
                placeholder='Lives' 
                name='lives'/>
              <input className="infoInput" 
                placeholder='Works at' 
                name='works at'/>
            </div>
            <div>
              <input type="text" 
                className="infoInput" 
                placeholder='Relationship Status' 
                name='relationship status'/>
            </div>
            <div>
              Profile Image
              <input type="file" name='profileImg'/>
              Cover Image
              <input type="file" name='coverImg' />
            </div>
            <button className="button infoButton">
              Update
            </button>
        </form>
    </Modal>
  );
}

export default ProfileModal;