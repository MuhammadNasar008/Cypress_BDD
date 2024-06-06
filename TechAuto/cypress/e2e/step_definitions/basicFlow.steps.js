import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const basicFlowPage = require('../../pages/basicFlowPage.json');

function generateRandom(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    console.log(rand); // say 99.81321410836433

    rand = Math.floor(rand); // 99

    return rand;
}

Given('I visit the app url', () => {
    cy.visit(Cypress.env('appUrl'));
});

Then('I go home', () => {
    cy.wait(2000);
    cy.visit(Cypress.env('appUrl'));
})

Then(/^I enter "(.*)" in the search field$/, item => {
    cy.get(basicFlowPage.searchModelTxt).should('be.visible').click({ force: true }).clear().type(item);
    cy.wait(2000)
})

Then(/^I enter "(.*)" in the search field in thingiverse$/, item => {
    cy.get(basicFlowPage.searchModelTxtThingiverse).should('be.visible').click({ force: true }).clear().type(item);
    cy.wait(2000)
})

When('I see landing home page title', () => {
    cy.contains(basicFlowPage.homePageTitle).should('be.visible');
})

Then('I click on search thingiverse button', () => {
    cy.wait(2000)
    cy.get(basicFlowPage.searchThingiverseIcon).first().should('be.visible').click();
    cy.wait(7000)
})

Then('I click on search make with tech button', () => {
    cy.wait(2000)
    cy.searchDirectory(basicFlowPage.searchMakeWithTechBtn);
})

Then('I click on search button', () => {
    cy.wait(2000)
    cy.get(basicFlowPage.searchModelBtn).should('be.visible').click({ force: true });
})

Then('I click on search button on thingiverse', () => {
    cy.wait(2000)
    cy.contains(basicFlowPage.searchBtn).should('be.visible').click({ force: true });
})

Then('I check openSCAD checkbox', () => {
    cy.contains(basicFlowPage.openSCADCheckbox).should('be.visible').click();
})

Then('I click on account button on menu', () => {
    cy.get(basicFlowPage.loginBtn).first().should('be.visible').click();
})

Then('I click on models button on menu', () => {
    cy.get(basicFlowPage.searchModels).first().should('be.visible').click();
})


Then('I see account management page title', () => {
    cy.contains(basicFlowPage.accountManagementPageTitle).should('be.visible');
})

Then(/^I click on "(.*)" item$/, item => {
    cy.get(basicFlowPage.items).last().should('be.visible')
})

Then('I see search items', () => {
    cy.wait(5000)
    cy.get(basicFlowPage.items).last().should('be.visible')
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.get(basicFlowPage.modelId).first().invoke('text').then(text => {
            data.modalId = text;
            cy.writeFile('cypress/fixtures/Common.json', data);
        });
    });
})

Then('I see search model page', () => {
    cy.wait(5000)
    cy.get(basicFlowPage.searchModelTxt).should('be.visible');
})

Then('I see search thingiverse page', () => {
    cy.get('p').contains(basicFlowPage.searchThingiversePageTitel).should('be.visible');
})

Then('I see the successfully login Page', () => {
    //cy.contains(basicFlowPage.successfullyLoginPage).should('be.visible');
    //
    // IMS the app now goes to different pages after a login depending on the previous
    // page. So the above check will no longer work.
    //
    cy.wait(3000);
})

Then('I click on item box icon', () => {
    cy.wait(3000)
    cy.get(basicFlowPage.items).last().should('be.visible').click();
})

Then('I click on thingiverse item box icon', () => {
    var con = false;
    cy.get('body').then(body => {
        for (let listvar = 2; listvar < body.find(basicFlowPage.searchItem).length; listvar++) {
            // for(let listvar = 2; listvar < 16 ; listvar++){     
            cy.readFile('cypress/fixtures/temp.json').then(data => {
                if (data.status == true) {
                    cy.wait(3000);
                    cy.get('body').then(body2 => {
                        if (body2.find(basicFlowPage.boxItems).length > 0) {
                            cy.get(basicFlowPage.boxItems).first().should('be.visible').click();
                            cy.wait(3000);
                            // listvar = body.find(basicFlowPage.searchItem).length ;
                            // con = true;
                            data.status = false;
                            cy.writeFile('cypress/fixtures/temp.json', data);
                        } else {
                            cy.get(basicFlowPage.searchItem).eq(listvar).should('be.visible').click();
                            cy.rowsPerPageSelectAll(basicFlowPage.rowsPerPage, basicFlowPage.dropdownAll);
                        }
                    })
                } else {}
            })
        }
        cy.readFile('cypress/fixtures/temp.json').then(data => {
            data.status = true;
            cy.writeFile('cypress/fixtures/temp.json', data);
        })
    })
})

Then('I see completed rendered models page', () => {
    cy.get('div').then(container => {
        if (container.find(basicFlowPage.popUpTooMany).length > 0) {
            cy.contains(basicFlowPage.tooManyFilesPopup).last().should('be.visible');
            cy.get('button').contains(basicFlowPage.okBtn).should('be.visible').click({ force: true });
        } else {

        }
    })
    cy.contains(basicFlowPage.completedRenderedModelsPage).last().should('be.visible');
})

Then('I navigate back', () => {
    cy.go('back')
})

Then('I click on open Scad general parameters dropdown', () => {
    cy.contains(basicFlowPage.openScadGeneralParametersDropdown).should('be.visible').click();
})


Then('I click on queue model generation button', () => {
    cy.get(basicFlowPage.queueForRenderingBtn).last().should('be.visible').click();
})

Then('I see model queued popup', () => {
    cy.contains(basicFlowPage.modelQueuedPopup).last().should('be.visible');
    cy.wait(2000)
})

Then('I click on model queued popup dismiss button', () => {
    cy.get(basicFlowPage.dismissModelQueuedBtn).should('be.visible').click({ force: true });
})

Then('I click processing queue icon on menu', () => {
    cy.get(basicFlowPage.processingQueueIcon).should('be.visible').click();
    cy.wait(5000);
})

Then('I see the queued open SCAD models page', () => {
    cy.contains(basicFlowPage.queuedOpenSCADModelsPage).should('be.visible');
})

Then('I see file name queued on open SCAD models page', () => {
    cy.contains(basicFlowPage.fileNameQueued).last().should('be.visible');
})

Then('I see item Image', () => {
    cy.contains(basicFlowPage.openScadGeneralParametersDropdown).should('be.visible');
})

Then('I click open SCAD model result icon on menu', () => {
    // cy.wait(5000)
    cy.get(basicFlowPage.openSCADModelResultIcon).first().should('be.visible').click();
})

Then('I click search local openSCAD models icon on menu', () => {
    cy.get(basicFlowPage.searchLocalOpenScadModelsIcon).first().should('be.visible').click();
    cy.wait(7000)
})

Then('I click on file 3D icon', () => {
    cy.get(basicFlowPage.file3Dicon).last().should('be.visible').click();
})

Then('I see file name on completed rendered models page', () => {
    var done = false;
    var res = { elementFound: false };
    cy.wrap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).each((num, i) => {
        cy.get('tbody').find('tr').as('rows');
        cy.get('tbody').then(container => {
            if (container.find('tr').length > 1) {
                cy.contains(basicFlowPage.fileNameCompletedRenderedMdels).last().should('be.visible');
                done = true;
                cy.log(done);
                var res = { elementFound: true };
            } else {
                cy.get('button').contains(basicFlowPage.refreshBtn).should('be.visible').click({ force: true });
                cy.wait(5000);
            }
        })
    })
})

Then('I see 3D popup', () => {
    cy.get(basicFlowPage.file3DPopup).should('be.visible');
})

Then('I click on 3D popup close button', () => {
    cy.contains(basicFlowPage.file3DPopupCloseBtn).should('be.visible').click();
})

Then('I delete all existing models in the results queue', () => {
    cy.deletingExistingModels(basicFlowPage.itemDeleteIcon);
})

Then('I see please sign in popup', () => {
    cy.contains(basicFlowPage.pleaseSignInPopup).last().should('be.visible');
})

Then('I click on please sign in popup dismiss button', () => {
    cy.get(basicFlowPage.dismissBtn).should('be.visible').click({ force: true });
})

Then('I click on please sign in popup dismiss button on thingiverse', () => {
    cy.contains(basicFlowPage.thingiverseDismissBtn).should('be.visible').click({ force: true });
})

Then('I login with valid credentials', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.login(data.username, data.userpassword);
    });
})

Then('I click on search item', () => {
    cy.get(basicFlowPage.searchItem).first().should('be.visible').click();
    cy.rowsPerPageSelectAll(basicFlowPage.rowsPerPage, basicFlowPage.dropdownAll)
})

Then('I see if a user is logged in make it logout', () => {
    cy.logoutUserIfLoggedin(basicFlowPage.signInToYourAccountTitel, basicFlowPage.logoutBtn);
})


Then('I enter model id in model search field', () => {
    cy.wait(3000)
    cy.get(basicFlowPage.modelId).first().invoke('text').then((text) => {
        cy.get(basicFlowPage.searchModelTxt).should('be.visible').click({ force: true }).clear().type(text);
    });
    cy.wait(6000)
})

Then('I see search model is visible', () => {
    cy.get(basicFlowPage.modelId).first().invoke('text').then((textOfModel) => {
        cy.get(basicFlowPage.searchModelTxt).first().invoke('val').then((textOfSearchModel) => {
            expect(textOfModel).to.contain(textOfSearchModel);
        });
    });
})


Then('I click on save retrieve parameters button', () => {
    cy.get(basicFlowPage.saveRetrieveParametersBtn).should('be.visible').click({ force: true });
})

Then('I enter value in save retrieve parameters', () => {
    cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.get(basicFlowPage.saveRetrieveParametersTxt).click({ force: true }).type(data.valueInField);
    });
})

Then('I click on save parameter set button', () => {
    cy.get('h3').contains(basicFlowPage.saveParameterSetBtn).should('be.visible').click({ force: true });
})

Then('I see parameter save data', () => {
    cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.get("td").contains(data.valueInField).should('be.visible');
    });
})

Then('I click on save retrieve parameters delete button', () => {
    cy.get(basicFlowPage.dropdown).last().should('be.visible').click();
    cy.get(basicFlowPage.selectAll).last().should('be.visible').click();
    cy.get(basicFlowPage.saveRetrieveParametersDeleteBtn).each($el => {
        var a = $el.length
        cy.get(basicFlowPage.saveRetrieveParametersDeleteBtn).first().should('be.visible').click({ force: true });
    })
})

Then('I see parameter save data is deleted', () => {
    cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.get("td").contains(data.valueInField).should('not.exist');
    });
})

Then('I enter comments in text field', () => {
    // cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.contains(basicFlowPage.enterCommentsHereTxt).click({ force: true }).type(data.comment);
    });
})

Then('I delete all existing model comment', () => {
    cy.deletingExistingComments(basicFlowPage.deleteCommentBtn);
})

Then('I click on add comment button', () => {
    cy.get(basicFlowPage.addCommentBtn).should('be.visible').click();
})

Then('I see comment is added on model', () => {
    cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.get("td").contains(data.comment).should('be.visible');
    });
})

Then('I see the comment is deleted on model', () => {
    cy.wait(3000)
    cy.readFile('cypress/fixtures/temp.json').then(data => {
        cy.get('td').contains(data.comment).should('not.exist');
    });
})

Then('I click on comment icon', () => {
    cy.get(basicFlowPage.commentModel).first().should('be.visible').click();
})

Then('I click on done', () => {
    cy.get('span').contains(basicFlowPage.doneBtn).should('be.visible').click();
})

Then('I click on preview model button', () => {
    cy.wait(5000)
    cy.get(basicFlowPage.previewBtn).should('be.visible').click();
})
Then(/^I see model "(.*)" in favorite list$/, item => {
    cy.contains(item).should('be.visible');
})
Then(/^I see model "(.*)" is not exist in favorite list$/, item => {
    cy.contains(item).should('not.exist');
})

Then('I see model preview image', () => {
    cy.wait(3000)
    cy.xpath(basicFlowPage.modelPreviewImage).should('exist');
})

Then('I click on model preview dismiss button', () => {
    cy.get(basicFlowPage.dismissPreviewBtn).should('be.visible').click();
})

Then('I make changes in the model', () => {
    const number = generateRandom(10);
    cy.get(basicFlowPage.paramsDropdown).first().click({ force: true });
    cy.get(basicFlowPage.parameterInput).first().scrollIntoView().clear().type(number);
})

Then('I click on heart icon and see heart become red', () => {
    cy.xpath(basicFlowPage.itemImage).should('be.visible');

    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.get(basicFlowPage.modelNameOnCustomizePage).first().invoke('text').then(text => {
            data.modalName = text;
            cy.writeFile('cypress/fixtures/Common.json', data);
        });
    });

    cy.get('i').then(container => {
        if (container.find(basicFlowPage.heartBecomeRed).length > 1) {} else {
            cy.get(basicFlowPage.favoriteModel).scrollIntoView().should('be.visible').click();
        }

        cy.get(basicFlowPage.heartBecomeRed).should('exist');
    })

})

Then('I click on heart icon and see heart become Gray', () => {
    cy.xpath(basicFlowPage.itemImage).should('be.visible');

    cy.get('i').then(container => {
        if (container.find(basicFlowPage.heartBecomeGray).length > 1) {} else {
            cy.wait(2000)
            cy.get(basicFlowPage.favoriteModel).scrollIntoView().should('be.visible').click();
        }
        cy.get(basicFlowPage.heartBecomeGray).should('be.visible');
    })

})

Then('I click on the favorite checkbox on search', () => {
    cy.get(basicFlowPage.myFavoitesCheckbox).should('exist').click({ force: true });
    cy.wait(5000)
})

Then(/^I see "(.*)" in favorite list$/, item => {
    cy.contains(item).should('be.visible')
})


Then(/^I see "(.*)" is not exist in favorite list$/, item => {
    cy.contains(item).should('not.exist')
});

Given('I visit search model via a url', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.searchModelUrl(Cypress.env('searchModelUrl'), data.modelId);
    })
})

Then('I find a model on the search page', () => {
    cy.get(basicFlowPage.modelIdText).should('be.visible');
})

Then('I capture the modelID', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.get(basicFlowPage.modelIdText).first().invoke('text').then(text => {
            data.newModelId = text.trim();
            cy.writeFile('cypress/fixtures/Common.json', data);
        });
    })
})
Then('I create the url and and access it', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.searchModelUrl(Cypress.env('searchModelUrl'), data.newModelId);
    })
})
Then('I verify the url returned the same model', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        cy.get(basicFlowPage.modelIdText).first().invoke('text').then(text => {
            let sampleText = text.trim();
            assert.strictEqual(data.modelId.trim(), sampleText)
        })
    })
})
Then('I click on edit pencil icon', () => {
    cy.get(basicFlowPage.editPencilIcon).click();
    cy.wait(2000);
})
Then('I click on preview button', () => {
    cy.get(basicFlowPage.previewBtn).should('be.visible').click()
    cy.wait(3000);
})
Then('I click on customizer button', () => {
    cy.contains(basicFlowPage.Customizer).should('be.visible').click();
    cy.wait(2000);
})
Then('I click on simplified preview button', () => {
    // cy.get('span').contains(basicFlowPage.simplifiedPreviewBtn).should('be.visible').click();
    cy.get('[data-cy="preview"]').first().should('be.visible').click()
    cy.wait(3000)
})
Then('I click pencil from top bar', () => {
    cy.get(basicFlowPage.pencilToolTopBar).click();
})
Then('I type script in editor', () => {
    cy.get(basicFlowPage.scriptWriter).should('be.visible').type('color("red") cube(5); ')
})
Then('I click on save to cloud', () => {
    cy.wait(2000);
    cy.get(basicFlowPage.saveToCloud).click();
    cy.wait(2000);
})
Then('I type file name', () => {
    cy.wait(2000);
    const fileName = `myModel-${new Date().getTime()}`
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        data.createdModel = fileName;
        cy.writeFile('cypress/fixtures/Common.json', data);
        cy.get(basicFlowPage.inputFileName).should('be.visible').type(fileName);
    });
    cy.wait(1000);
})
Then('I save the file', () => {
    cy.get(basicFlowPage.saveFileName).click();
    cy.wait(3000);
})
Then('I click ok on popup', () => {
    cy.wait(2000);
    cy.get(basicFlowPage.fileSaveMsg).click();
});
Then('I enter name created model in the search field', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        let search = data.createdModel.trim();
        cy.get(basicFlowPage.searchModelTxt).should('be.visible').click({ force: true }).clear().type(search);
        cy.wait(2000)
    })
})
Then('I click on my models & private', () => {
    cy.wait(2000);
    cy.get(basicFlowPage.myModelsOnly).click({ force: true });
})
Then('I click on dismiss button', () => {
    cy.get('body').then((body) => {
        if (body.find(basicFlowPage.dismissPremiumBtn).length > 0) {
            cy.get(basicFlowPage.dismissPremiumBtn).click();
        }
    })
})
Then('I click ok in premium reminder', () => {
    cy.get('body').then((body) => {
        if (body.find(basicFlowPage.okPremiumButtonSave).length > 0) {
            cy.get(basicFlowPage.okPremiumButtonSave).click();
        }
    })
})

Then('I click on Share an openSCADModel template button', () => {

    cy.get(basicFlowPage.shareOpenSCADModel).should('be.visible').click();

})
Then('I click on upload button and uploaded related files', () => {

    cy.get(basicFlowPage.inputToUploadFileShareModel).selectFile('cypress/fixtures/openscad_testing.jpg', { force: true })
    cy.wait(3000)

    cy.get(basicFlowPage.inputToUploadFileShareModel).selectFile('cypress/fixtures/openscad_testing.scad', { force: true })
    cy.wait(3000)

    cy.get(basicFlowPage.inputToUploadFileShareModel).selectFile('cypress/fixtures/openscad_testing.stl', { force: true })
    cy.wait(3000)
});

Then('I click on eye button to make thumbnail', () => {

    cy.get(basicFlowPage.makeThumbNailShareModel).click({ force: true })

});

Then('I enter model name', () => {
    let testModelName = `Test Model ${generateRandom()}`
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        data.testSharedModelName = testModelName;
        cy.writeFile('cypress/fixtures/Common.json', data);
        cy.contains(basicFlowPage.modelNameInShareModel).should('be.visible').click({ force: true }).type(testModelName);
    });
});


Then('I enter model discription', () => {
    cy.readFile('cypress/fixtures/Common.json').then(data => {
        var details = data.testDetialsShareModel
        cy.contains(basicFlowPage.modelDetailsInShareModel).should('be.visible').click({ force: true }).type(details);
    });
});

Then('I enter keyword', () => {

    cy.contains(basicFlowPage.modelKeyWordInShareModel).should('be.visible').click({ force: true }).type("test");

})

Then('I click on share model button', () => {

    cy.contains(basicFlowPage.shareModelButton).should('be.visible').click({ force: true });

});

Then('I click ok on popup Model Saved', () => {

    cy.wait(5000)
    cy.get(basicFlowPage.popUpSaveBtn).should('be.visible').click({ force: true });

});

Then('I enter name of created model in search field', () => {

    cy.readFile('cypress/fixtures/Common.json').then(data => {

        var name = data.testSharedModelName
        cy.get(basicFlowPage.searchModelTxt).should('be.visible').click({ force: true }).clear().type(name);

    });
    cy.wait(2000)
})

Then('I click on private model checkbox', () => {
    cy.contains(basicFlowPage.privateModelCHeckBox).should('be.visible').click({ force: true })
})

Then('I click on tool icon', () => {
    cy.wait(5000)
    cy.get(basicFlowPage.toolsIcon).click({ force: true })
})

Then('I click on delete button', () => {
    cy.window().then(function($win) {
        cy.stub($win, 'prompt').returns('DELETE')
        cy.get(basicFlowPage.deleteModel).should('be.visible').click({ force: true })
        cy.wait(2000)
    })
    
})